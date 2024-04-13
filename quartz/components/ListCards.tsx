import styles from "./styles/listcard.scss"

export default (() => {
    function YourComponent() {
      return <p class="red-text">Example Component</p>
    }
   
    YourComponent.css = `
    p.red-text {
      color: red;
    }
    `
   
    return YourComponent
  }) satisfies QuartzComponentConstructor