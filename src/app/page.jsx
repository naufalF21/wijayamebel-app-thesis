import GallerySection from '@/containers/Home/GallerySection';
import HeroSection from '@/containers/Home/HeroSection';
import InviteSection from '@/containers/Home/InviteSection';
import ProfileSection from '@/containers/Home/ProfileSection';

export default function Home() {
	return (
		<main>
			<HeroSection />
			<ProfileSection />
			<GallerySection />
			<InviteSection />
		</main>
	);
}
