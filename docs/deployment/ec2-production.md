# EC2 Production Deployment

This app runs on EC2 behind the host Nginx server.

## Service Flow

```text
GoDaddy DNS -> EC2 Elastic IP -> Nginx -> 127.0.0.1:3001 -> Docker container port 3000
```

Flow details:

```text
poltosgarage.in
www.poltosgarage.in
        |
        v
GoDaddy DNS A/CNAME records
        |
        v
EC2 Elastic IP
        |
        v
Host Nginx: /etc/nginx/conf.d/thepoltosgarage.conf
        |
        v
Local proxy: http://127.0.0.1:3001
        |
        v
Docker container: thepoltosgarage, internal port 3000
        |
        v
Next.js standalone production server
```

Recommended folders:

```text
/var/www/thepoltosgarage        app Git repository
/etc/thepoltosgarage            Docker Compose deployment config
```

## One-Time Server Setup

Install Docker if it is not already installed:

```bash
sudo dnf install -y docker
sudo systemctl enable --now docker
sudo usermod -aG docker ec2-user
```

Log out and SSH back in, then verify:

```bash
docker --version
docker compose version
```

Clone the app repo:

```bash
sudo mkdir -p /var/www
sudo chown -R ec2-user:ec2-user /var/www
cd /var/www
git clone <GITHUB_REPO_URL> thepoltosgarage
```

## DNS

In GoDaddy:

```text
A      @      <EC2_ELASTIC_IP>
CNAME  www    poltosgarage.in
```

Verify:

```bash
dig +short poltosgarage.in
dig +short www.poltosgarage.in
```

## Docker Compose

Keep the Docker Compose config in:

```text
/etc/thepoltosgarage/docker-compose.yml
```

Point it to the app repository:

```yaml
services:
  thepoltosgarage:
    build:
      context: /var/www/thepoltosgarage
      dockerfile: Dockerfile
    container_name: thepoltosgarage
    restart: unless-stopped
    ports:
      - "127.0.0.1:3001:3000"
```

This means:

```text
EC2 host port 3001 -> Docker container port 3000
```

The app is not exposed directly to the public internet. Only Nginx can reach it through `127.0.0.1:3001`.

Manual container start/rebuild:

```bash
cd /etc/thepoltosgarage
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:3001
```

## Nginx

Create `/etc/nginx/conf.d/thepoltosgarage.conf`:

```nginx
server {
    listen 80;
    server_name poltosgarage.in www.poltosgarage.in;

    client_max_body_size 20m;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

## SSL

After DNS resolves:

```bash
sudo certbot --nginx -d poltosgarage.in -d www.poltosgarage.in
```

## Deploy Latest Feature

Use this command after a feature is merged to the production branch:

```bash
deploy-thepoltosgarage
```

The command should perform this flow:

```text
1. Go to /var/www/thepoltosgarage
2. Pull the latest code from GitHub
3. Rebuild and restart the Docker container from /etc/thepoltosgarage
4. Verify http://127.0.0.1:3001
5. Validate Nginx config
6. Reload Nginx
```

Expected command implementation:

```bash
#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/var/www/thepoltosgarage"
COMPOSE_DIR="/etc/thepoltosgarage"
APP_URL="http://127.0.0.1:3001"
BRANCH="main"

cd "$APP_DIR"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

cd "$COMPOSE_DIR"
docker compose up -d --build
docker compose ps

curl --fail --silent --show-error --head "$APP_URL" > /dev/null

sudo nginx -t
sudo systemctl reload nginx
```

Install the command once:

```bash
sudo nano /usr/local/bin/deploy-thepoltosgarage
sudo chmod +x /usr/local/bin/deploy-thepoltosgarage
```

## Useful Checks

Check whether port `3001` is free before first deployment:

```bash
sudo ss -ltnp | grep ':3001'
```

Check running containers:

```bash
cd /etc/thepoltosgarage
docker compose ps
docker compose logs -f
```

Check Nginx:

```bash
sudo nginx -t
sudo systemctl status nginx
```

Check public site:

```bash
curl -I https://poltosgarage.in
curl -I https://www.poltosgarage.in
```
