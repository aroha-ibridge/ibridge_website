import CareerApplyPage from '../../components/sections/company/CareerApplyPage';
import careersData from '../../content/company/careersData';

function CareerApply({ jobId }) {
  const job = careersData.jobs.find((item) => item.id === jobId) || null;
  const otherJobs = job ? careersData.jobs.filter((item) => item.id !== jobId) : [];
  return <CareerApplyPage job={job} otherJobs={otherJobs} />;
}

export default CareerApply;
