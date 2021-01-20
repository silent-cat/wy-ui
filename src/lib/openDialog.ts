import wyDialog from "./wyDialog.vue";
import { createApp, h } from "vue";
export const openDialog = (options) => {
  const { title, content,confirm,cancel } = options;
  const div = document.createElement("div");
  document.body.appendChild(div);
  const close = () => {
    app.unmount(div);
    div.remove();
  };
  const app = createApp({
    render() {
      return h(
        wyDialog,
        {
          visible: true,
          "onUpdate:visible": (newVisible) => {
            // console.log(newVisible);
            if (newVisible === false) {
              close()
            }
          },
          confirm,cancel
        },
        {
          title,
          content,
        }
      );
    },
  });
  app.mount(div);
};
