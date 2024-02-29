"use client";

import ReduxProvider from "@/store/redux-provider";
import AuthUpdater from "./auth-updater";
import AuthViewer from "./auth-viewer";
import HomePage from "./components/home-page";
export default function Home() {
  return (
    <ReduxProvider>
      <main className="w-full h-screen ">
        {/* <AuthUpdater />
        <AuthViewer /> */}
        <HomePage />
      </main>
    </ReduxProvider>
  );
}
