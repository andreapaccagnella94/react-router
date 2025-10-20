

export default function HomePage() {

    return (
        <>

            <main className="min-vh-100">
                <div className="p-5 my-4 bg-light rounded-3">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold"> </h1>
                        <p className="col-md-8 fs-4">
                            {/* messagio di benventuo del sito finto di un e-commerce */}
                            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
                            For a e-commerce site, you might use this area to showcase a new product, highlight a special offer, or provide important updates to your customers.
                        </p>
                        <button className="btn btn-primary btn-lg" type="button">
                            Example button
                        </button>
                    </div>
                </div>

            </main>
        </>
    )
}