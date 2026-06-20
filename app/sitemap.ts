import type { MetadataRoute } from "next";
import { posts, products, vehicles, vlogs } from "@/lib/data";

const baseUrl = "https://poltosgarage.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/garage", "/stories", "/vlogs", "/submit", "/marketplace", "/challenges", "/community", "/partners", "/about", "/contact"];
  return [
    ...staticRoutes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() })),
    ...vehicles.map((item) => ({ url: `${baseUrl}/garage/${item.slug}`, lastModified: new Date() })),
    ...posts.map((item) => ({ url: `${baseUrl}/stories/${item.slug}`, lastModified: new Date() })),
    ...vlogs.map((item) => ({ url: `${baseUrl}/vlogs/${item.slug}`, lastModified: new Date() })),
    ...products.map((item) => ({ url: `${baseUrl}/marketplace/${item.slug}`, lastModified: new Date() }))
  ];
}
