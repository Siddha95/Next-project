import { notFound } from "next/navigation";
// This page is intentionally left blank to trigger a 404 error
// it finds the first not found component   
export default function NotFound() {
    notFound();
}