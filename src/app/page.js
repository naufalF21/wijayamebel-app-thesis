import GallerySection from '@/containers/Home/GallerySection';
import HeroSection from '@/containers/Home/HeroSection';
import ProfileSection from '@/containers/Home/ProfileSection';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<ProfileSection />
			<GallerySection />
		</main>
	);
}
