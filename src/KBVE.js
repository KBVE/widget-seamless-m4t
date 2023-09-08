import React from "react";
import * as Locker from "./Locker";
import { useStore } from "@nanostores/react";
import { client } from "@gradio/client";
import axios from "axios";

const KBVE = ({ ve }) => {
  const $title = useStore(Locker.title$);
  const $category = useStore(Locker.category$);
  const $img = useStore(Locker.img$);
  const $link = useStore(Locker.link$);
  const $description = useStore(Locker.description$);
  const $n8n = useStore(Locker.n8n$);
  const $load = useStore(Locker.load$);

  // Duel Functions
  const $gradio = useStore(Locker.gradio$);
  const $axios = useStore(Locker.axios$);

  // Task Name

  const $taskName = useStore(Locker.taskName$);
  const $audioSource = useStore(Locker.audioSource$);
  const $inputAudioMic = useStore(Locker.inputAudioMic$);
  const $inputAudioFile = useStore(Locker.inputAudioFile$);
  const $inputText = useStore(Locker.inputText$);
  const $sourceLanguage = useStore(Locker.sourceLanguage$);
  const $targetLanguage = useStore(Locker.targetLanguage$);
  const $result = useStore(Locker.result$);

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

    // Duel Functions

    if (ve.getAttribute("gradio"))
      Locker.tasker(Locker.gradio$, ve.getAttribute("gradio"));

    if (ve.getAttribute("axios"))
      Locker.tasker(Locker.axios$, ve.getAttribute("axios"));

    // Task Names

    if (ve.getAttribute("taskName"))
      Locker.tasker(Locker.taskName$, ve.getAttribute("taskName"));

    if (ve.getAttribute("audioSource"))
      Locker.tasker(Locker.audioSource$, ve.getAttribute("audioSource"));

    if (ve.getAttribute("inputAudioMic"))
      Locker.tasker(Locker.inputAudioMic$, ve.getAttribute("inputAudioMic"));

    if (ve.getAttribute("inputAudioFile"))
      Locker.tasker(Locker.inputAudioFile$, ve.getAttribute("inputAudioFile"));

    if (ve.getAttribute("inputText"))
      Locker.tasker(Locker.inputText$, ve.getAttribute("inputText"));

    if (ve.getAttribute("sourceLanguage"))
      Locker.tasker(Locker.sourceLanguage$, ve.getAttribute("sourceLanguage"));

    if (ve.getAttribute("targetLanguage"))
      Locker.tasker(Locker.targetLanguage$, ve.getAttribute("targetLanguage"));

    if (ve.getAttribute("result"))
      Locker.tasker(Locker.result$, ve.getAttribute("result"));

    Locker.tasker(Locker.load$, false);
  }, []);

  const seamlessM4T = async (lang) => {
    Locker.tasker(Locker.load$, true);
    console.log(`Fetching Data for ${lang}`);
    if($gradio) makeApiCall();
    if($axios) handleTranslate();
  };

  const fetchAudio = async () => {
    const response = await fetch(
      "/sample.wav"
    );
    return await response.blob();
  };

  const makeApiCall = async () => {
    try {
      const exampleAudio = await fetchAudio();
      const app = await client($n8n);
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
    } catch {
      console.log("Fetch Error!");
    }
  };


  const handleTranslate = async () => {

    try {
    const response = await axios.get($n8n, {
      params: {
        task_name: $taskName,
        audio_source: $audioSource,
        input_audio_mic: $inputAudioMic,
        input_audio_file: $inputAudioFile,
        input_text: $inputText,
        source_language: $sourceLanguage,
        target_language: $targetLanguage,
      },
    });
    Locker.tasker(Locker.result$, response.data.result);
  }
  catch {
    console.log("Error!");
  }
    
  };

  return (
    <>
      <div className="max-w-lg p-4 shadow-md !bg-default bg-gray-900 text-gray-100">
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
            {$result && <>{$result}</>}
          </div>
        </div>
      </div>
    </>
  );
};

export default KBVE;
