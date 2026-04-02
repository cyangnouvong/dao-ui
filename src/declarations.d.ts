declare module "*.css";
declare module "*.module.css" {
  const styles: { [key: string]: string };
  export default styles;
}
