import BannerSection from '@/containers/Kontak/BannerSection';
import FormSection from '@/containers/Kontak/FormSection/index';

export default function kontak() {
	return (
		<main>
			<BannerSection />
			<FormSection />
			<div id="map" className="px-[108px] py-5">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2514715207253!2d112.88662007476458!3d-7.656087992360261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51006f5ea949f79%3A0x85830db782d6c023!2sMebel%20Wijaya!5e0!3m2!1sid!2sid!4v1705500965799!5m2!1sid!2sid"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="w-full h-[500px]"
				></iframe>
			</div>
		</main>
	);
}
