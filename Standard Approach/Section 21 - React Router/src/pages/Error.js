import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h3>An error occured!</h3>
        <p>Could not find this page.</p>
      </main>
    </>
  );
}

export default ErrorPage;
