"use client"

import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    // Redirect to a different URL automatically after 2 seconds
    setTimeout(() => {
      window.location.href = '/dashboard'; // replace with the desired URL
    }, 2000); // you can adjust the time (in milliseconds)
  }, []);

  return (
    <div>
      <h2>Welcome to My AI Dashboard Page, I created with the help of Tubeguruji</h2>
      <Button>Subscribe</Button>
    </div>
  );
}
