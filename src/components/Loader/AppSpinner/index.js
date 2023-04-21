import "./style.css";

const AppSpinner = () => {
  return (
    <div class="container items-center flex justify-center">
      <div class="ring"></div>
      <div class="ring"></div>
      <div class="ring"></div>
      <p>Loading ... </p>
    </div>
  );
};

export default AppSpinner;
