import PreviewButton from "./extensions/components/PreviewButton";
import TweetButton from "./extensions/components/TweetButton";

export default {
  config: {
    locales: ["fr", "de"],
    translations: {
      fr: {
        "components.PreviewButton.button": "Prévisualiser",
        "components.TweetButton.button": "Partager sur Twitter",
      },
      en: {
        "components.PreviewButton.button": "Preview",
        "components.TweetButton.button": "Share on Twitter",
      },
      de: {
        "components.PreviewButton.button": "Vorschau",
        "components.TweetButton.button": "Auf Twitter teilen",
      },
    },
  },
  bootstrap(app) {
    app.injectContentManagerComponent("editView", "right-links", {
      name: "PreviewButton",
      Component: PreviewButton,
    });
    app.injectContentManagerComponent("editView", "right-links", {
      name: "TweetButton",
      Component: TweetButton,
    });
  },
};
