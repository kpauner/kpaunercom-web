import { appConfig } from "@/config/app.config";
import PostsList from "@/features/posts/components/posts-list";

export default async function Home() {
  // const t = await getTranslations("index");

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
        <h1>Live</h1>
        <PostsList />
      </div>
    );
  }
}
