const BookUs = () => {

    const privateEventForm = 'https://docs.google.com/forms/d/e/1FAIpQLSdtS0eojOwpVfe79goNYxAqura2UXOKTgzMMYekHDC1Klc3Zg/viewform';

    return (
        <div>
            <h3>For Private Events</h3>
            <a href={privateEventForm} className="formlink">form</a>

        </div>
    );
};

export default BookUs;

