import Banner from '@/components/Banner';
import FaqItemSection from '@/containers/Faq/FaqItemSection';

async function getQuestions() {
	const res = await fetch(`${process.env.API_URL}/api/questions`, { cache: 'no-store' });
	const data = await res.json();

	return data;
}

export default async function FAQ() {
	const data = await getQuestions();

	return (
		<main className="min-h-screen">
			<Banner name="FAQ" link="/faq" />
			<FaqItemSection data={data} />
		</main>
	);
}
