import CareerApplyPage from '../../components/sections/company/CareerApplyPage';
import careersData from '../../content/company/careersData';

function CareerApply({ jobId }) {
  const job = careersData.jobs.find((item) => item.id === jobId) || null;
  return <CareerApplyPage job={job} />;
}

export default CareerApply;
