import { Layout } from '@/components/Layout';
import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { UserRolesSection } from '@/components/UserRolesSection';

const Index = () => {
  return (
    <Layout showNavigation={true}>
      <HeroSection />
      <FeaturesSection />
      <UserRolesSection />
    </Layout>
  );
};

export default Index;
