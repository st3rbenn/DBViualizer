import { notifications } from "@mantine/notifications";

class NotificationUtils {
  title: string;
  message: string;

  constructor(title?: string, message?: string, status?: number) {
    if (title) {
      this.title = title;
    }
    if (message) {
      this.message = message;
    }

    if (status && !title && !message) {
      switch (status) {
        case 200:
          this.title = 'Action completed successfully';
          this.message = '';
          break;
        case 400:
          this.title = 'Action returned a bad request';
          this.message = 'please check the console for more details';
          break;
        case 500:
          this.title = 'Internal server error';
          this.message = 'please check the console for more details';
          break;
        default:
          this.title = 'Something went wrong';
          this.message = 'please check the console for more details';
          break;
      }
    }
  }

  showErrorMessage = async () => {
    notifications.show({
      title: this.title,
      message: this.message,
      withBorder: true,
      color: 'red',
      radius: 'sm',
    });
  };

  showSuccessMessage = async () => {
    notifications.show({
      title: this.title,
      message: this.message,
      withBorder: true,
      color: 'green',
      radius: 'sm',
    });
  };

  showLoadingMessage = async () => {
    notifications.show({
      title: this.title,
      message: this.message,
      withBorder: true,
      color: 'yellow',
      radius: 'sm',
      loading: true,
    });
  };

  showUpdateMessage = async () => {
    notifications.show({
      title: this.title,
      message: this.message,
      withBorder: true,
      color: 'blue',
      radius: 'sm',
      loading: false,
      icon: '✅'
    });
  }
}

export default NotificationUtils;
