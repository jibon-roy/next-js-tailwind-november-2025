"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button/Button";

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center w-full">
        <div className="mx-auto text-9xl font-semibold text-primary w-36 h-36 flex items-center justify-center rounded-full bg-primary/10 mb-6">
          404
        </div>

        <h1 className="text-4xl font-semibold text-primary-text mb-2">
          Page Not Found
        </h1>
        <p className="text-secondary-text mb-8">
          The page you are looking for doesn&apos;t exist or has been moved. Try
          returning home or go back to where you came from.
        </p>

        <div className="flex flex-col items-center justify-center gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={() => router.back()}
            className="w-full max-w-[220px]"
          >
            Go Back
          </Button>

          <div className="text-sm text-secondary-text">or,</div>
          <Link href="/" className="w-full max-w-[220px]">
            <Button className="w-full" variant="primary" size="md">
              Go to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
