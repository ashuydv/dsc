/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ComponentCard({
  id,
  image,
  videoUrl,
  title,
  views = 0,
  likes = 0,
  creators = "N/A",
  platforms = "N/A",
}) {
  return (
    <Link to={`/projects/${id}`}>
      <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <CardHeader>
          {image && (
            <div className="mb-4 rounded-xl overflow-hidden">
              <img
                src={image}
                alt={title || "Project Image"}
                className="w-full h-auto object-cover rounded-t-md"
              />
            </div>
          )}
          <div className="mb-4">
            <Badge variant="outline">{platforms}</Badge>
          </div>
          <CardTitle className="pt-4 text-lg sm:text-xl md:text-2xl">
            {title || "Create project"}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-lg">
            {videoUrl ? (
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                Watch Demo
              </a>
            ) : (
              "Deploy your new project in one-click."
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-1 text-xs sm:text-sm md:text-base">
            {(creators || platforms) &&
              <a className="flex items-center w-full">
                <div
                  className="w-12 h-12 rounded-full flex-shrink-0"
                  style={{
                    background: `linear-gradient(${Math.floor(Math.random() * 360)}deg, #${Math.floor(Math.random() * 16777215).toString(16)}, #${Math.floor(Math.random() * 16777215).toString(16)})`,
                  }}
                />
                <span className="flex-grow flex flex-col pl-4">
                  <span className="h-6 text-lg font-medium text-gray-900">{creators}</span>
                  <span className="h-6 font-medium text-gray-900">{platforms}</span>
                </span>
              </a>
            }
            <div className="flex items-center gap-3 w-full justify-end">
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0.5 0.5 16 16"
                    className="Appreciations-icon-Z4i ProjectCover-icon-QsA ProjectCover-appreciations-hIS"
                  >
                    <path fill="none" d="M.5.5h16v16H.5z"></path>
                    <path d="M.5 7.5h3v8h-3zM7.207 15.207c.193.19.425.29.677.293H12c.256 0 .512-.098.707-.293l2.5-2.5c.19-.19.288-.457.293-.707V8.5c0-.553-.445-1-1-1h-5L11 5s.5-.792.5-1.5v-1c0-.553-.447-1-1-1l-1 2-4 4v6l1.707 1.707z"></path>
                  </svg>
                </span>
                <span className="text-xs sm:text-sm md:text-base">
                  {likes}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    className="ProjectCover-icon-QsA ProjectCover-views-Euf"
                  >
                    <path d="M8.5 3.5c-5 0-8 5-8 5s3 5 8 5 8-5 8-5-3-5-8-5zm0 7c-1.105 0-2-.896-2-2 0-1.106.895-2 2-2 1.104 0 2 .894 2 2 0 1.104-.896 2-2 2z"></path>
                  </svg>
                </span>
                <span className="text-xs sm:text-sm md:text-base">
                  {views}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
