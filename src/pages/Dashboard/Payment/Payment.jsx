import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from './../../../components/SectionTitle/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import ChekoutForm from './ChekoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
const Payment = () => {
    return (
        <div>
            <SectionTitle heading="Payment" subHeading="please pay to eat"></SectionTitle>
            <Elements stripe={stripePromise}>
                <ChekoutForm></ChekoutForm>
            </Elements>
        </div>
    );
};

export default Payment;