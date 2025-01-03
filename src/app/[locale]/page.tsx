import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app.config";
import PostsList from "@/features/posts/components/posts-list";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  const t = await getTranslations("index");

  if (appConfig.mode === "soon") {
    return <>Coming Soon</>;
  }

  if (appConfig.mode === "maintenance") {
    return (
      <div>
        <h1>Maintenance</h1>
      </div>
    );
  }

  if (appConfig.mode === "live") {
    return (
      <div>
        <h1>{t("title")}</h1>
        <Button>Click me</Button>
        <PostsList />
      </div>
    );
  }
}
