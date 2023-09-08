import React from "react";
import * as Locker from "./Locker";
import { useStore } from "@nanostores/react";
import { client } from "@gradio/client";

const KBVE = ({ ve }) => {
  const $title = useStore(Locker.title$);
  const $category = useStore(Locker.category$);
  const $img = useStore(Locker.img$);
  const $link = useStore(Locker.link$);
  const $description = useStore(Locker.description$);
  const $n8n = useStore(Locker.n8n$);
  const $load = useStore(Locker.load$);

  React.useEffect(() => {
    if (ve.getAttribute("title"))
      Locker.tasker(Locker.title$, ve.getAttribute("title"));
    if (ve.getAttribute("category"))
      Locker.tasker(Locker.category$, ve.getAttribute("category"));
    if (ve.getAttribute("img"))
      Locker.tasker(Locker.img$, ve.getAttribute("img"));
    if (ve.getAttribute("link"))
      Locker.tasker(Locker.link$, ve.getAttribute("link"));
    if (ve.getAttribute("description"))
      Locker.tasker(Locker.description$, ve.getAttribute("description"));
    if (ve.getAttribute("n8n"))
      Locker.tasker(Locker.n8n$, ve.getAttribute("n8n"));
    Locker.tasker(Locker.load$, false);
  }, []);

  const seamlessM4T = async (lang) => {
    Locker.tasker(Locker.load$, true);
    console.log(`Fetching Data for ${lang}`);
    makeApiCall();
  };

  const fetchAudio = async () => {
    const response = await fetch(
      "https://github.com/gradio-app/gradio/raw/main/test/test_files/audio_sample.wav"
    );
    return await response.blob();
  };

  const makeApiCall = async () => {
    const exampleAudio = await fetchAudio();
    const app = await client("https://gratitud3-seamless-m4t.hf.space/");
    const result = await app.predict("/run", [
      "S2ST (Speech to Speech translation)",
      "file",
      exampleAudio,
      exampleAudio,
      "Howdy!",
      "Afrikaans",
      "Bengali",
    ]);
    console.log(result.data);
  };

  return (
    <>
      <div className="max-w-lg p-4 shadow-md bg-default dark:bg-gray-900 dark:text-gray-100">
        <div className="flex justify-between pb-4 border-bottom">
          <div className="flex items-center">
            <a
              rel="noopener noreferrer"
              href={$link}
              className="mb-0 capitalize dark:text-gray-100">
              {$category}
            </a>
          </div>
          <a rel="noopener noreferrer" href="#">
            See All
          </a>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <img
              src={$img}
              alt=""
              className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="flex items-center text-xs flex divide-x-2 rounded dark:text-gray-100 divide-gray-700">
              <button
                type="button"
                className="px-3 py-1"
                onClick={() => seamlessM4T("en")}>
                EN
              </button>
              <button
                type="button"
                className="px-3 py-1"
                onClick={() => seamlessM4T("de")}>
                DE
              </button>
              <button
                type="button"
                className="px-3 py-1"
                onClick={() => seamlessM4T("fr")}>
                FR
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {$load && (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-400"></div>
              </div>
            )}{" "}
            <>
              <a rel="noopener noreferrer" href="#" className="block">
                <h3 className="text-xl font-semibold dark:text-orange-400">
                  {$title}
                </h3>
              </a>
              <p className="leadi dark:text-gray-400">{$description}</p>
            </>
          </div>
        </div>
      </div>
    </>
  );
};

export default KBVE;
