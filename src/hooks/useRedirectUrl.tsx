'use client';
import { useSearchParams } from "next/navigation";

export function useRedirectUrl() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const authError = searchParams.get("error");

  return { callbackUrl, authError };
}
