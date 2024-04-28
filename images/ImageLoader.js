'use client'

export default function myImageLoader({ src }) {
  if (src !== "contact_us.jpg") {
    return `https://fakestoreapi.com/img/${src}`;
  }
  return src
}