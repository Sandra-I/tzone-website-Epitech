/**
 * Will display message on top of the screen
 */
 export class Toastr {
    static toastDisplayed: boolean;
  
    /**
     * Display a *success* message, with a green background.
     *
     * @param message The message to display.
     */
    public static success(message: string): void {
      this.displayMessage(message, "success");
    }
  
    /**
     * Display a *error* message, with a red background.
     *
     * @param message The message to display.
     */
    public static error(message: string): void {
      this.displayMessage(message, "error");
    }
  
    /**
     * Create a toast.
     *
     * @param message The message to display.
     * @param className The class to add to the toast
     */
    private static displayMessage(message: string, className: string): void {
      if(!this.toastDisplayed){
        const toast = document.createElement('div');
        const textContainer = document.createElement('span');
        textContainer.textContent = message;
        toast.appendChild(textContainer);
        toast.classList.add('toast_message');
        toast.classList.add('toast_message_' + className);
        document.body.appendChild(toast);
        this.toastDisplayed = true;
        setTimeout(() => this.deleteToast(toast), 2500);
      }
    }
  
    private static deleteToast(toast: HTMLDivElement){
      toast.classList.add('toast_message_exit');
      setTimeout(() => {
        document.body.removeChild(toast);
        this.toastDisplayed = false;
      }, 1300)
  
    }
  }
  