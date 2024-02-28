function sendNotification() {
  if (!window.Notification) {
    console.log("Notifications not allowed");
  } else {
    if (Notification.permission === "granted") {
      console.log("permission is granted");
      const notify = new Notification("Hi There!", {
        body: "Nemish this side",
        icon: "https://picsum.photos/200/300",
      });
    } else {
      Notification.requestPermission((permission) => {
        if (permission === "granted") {
          console.log("user granted permission");
          const notify = new Notification("Hi There!", {
            body: "Nemish this side",
            icon: "https://picsum.photos/200/300",
          });
        } else {
          console.log("user block notifications");
        }
      });
      console.log("not granted");
    }
  }
}
