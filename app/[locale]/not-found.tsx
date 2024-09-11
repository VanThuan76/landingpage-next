function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen py-24">
            <h1 className="text-6xl font-bold ">
                <span className="text-destructive">404</span>, Page{" "}
                <span className="text-destructive">Not Found!</span>
            </h1>
        </div>
    );
}

export default NotFound;
