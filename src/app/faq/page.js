import Banner from '@/components/Banner';
import FaqItemSection from '@/containers/Faq/FaqItemSection';

export default function FAQ() {
	return (
		<main className="min-h-screen">
			<Banner name="FAQ" link="/faq" />
			<FaqItemSection />
		</main>
	);
}
