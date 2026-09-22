import { Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Programs from '../pages/Programs/Programs';
import SelfLearning from '../pages/SelfLearning/SelfLearning';
import ProgramCourseDetail from '../pages/Programs/ProgramCourseDetail';
import Products from '../pages/Products/Products';
import LearnSmartLms from '../pages/LearnSmartLms/LearnSmartLms';
import TrainingUpskilling from '../pages/TrainingUpskilling/TrainingUpskilling';
import TrainingProgram from '../pages/TrainingProgram/TrainingProgram';
import Corporate from '../pages/Corporate/Corporate';
import IndividualLearner from '../pages/IndividualLearner/IndividualLearner';
import Institution from '../pages/Institution/Institution';
import Blogs from '../pages/Blogs/Blogs';
import ContactUs from '../pages/ContactUs/ContactUs';
import ThankYou from '../pages/ThankYou/ThankYou';
import TermsConditions from '../pages/TermsConditions/TermsConditions';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import DataEngineeringProgram from '../pages/DataEngineeringProgram/DataEngineeringProgram';
import FullStackMernProgram from '../pages/FullStackMernProgram/FullStackMernProgram';
import FullStackJavaProgram from '../pages/FullStackJavaProgram/FullStackJavaProgram';
import FullStackPythonProgram from '../pages/FullStackPythonProgram/FullStackPythonProgram';
import DataScienceProgram from '../pages/DataScienceProgram/DataScienceProgram';
import DataAnalyticsProgram from '../pages/DataAnalyticsProgram/DataAnalyticsProgram';
import PysparkProgram from '../pages/PysparkProgram/PysparkProgram';
import DatabricksDataEngineeringProgram from '../pages/DatabricksDataEngineeringProgram/DatabricksDataEngineeringProgram';
import MicrosoftFabricDataEngineeringProgram from '../pages/MicrosoftFabricDataEngineeringProgram/MicrosoftFabricDataEngineeringProgram';
import TableauProgram from '../pages/TableauProgram/TableauProgram';
import AdvancedExcelProgram from '../pages/AdvancedExcelProgram/AdvancedExcelProgram';
import SqlBootcampProgram from '../pages/SqlBootcampProgram/SqlBootcampProgram';
import PythonBootcampProgram from '../pages/PythonBootcampProgram/PythonBootcampProgram';
import CorporateElp from '../pages/CorporateElp/CorporateElp';
import CorporateContentCreation from '../pages/CorporateContentCreation/CorporateContentCreation';
import InstitutionExpertTalks from '../pages/InstitutionExpertTalks/InstitutionExpertTalks';
import InstitutionEpbl from '../pages/InstitutionEpbl/InstitutionEpbl';
import InstitutionFacultyDevelopmentProgram from '../pages/InstitutionFacultyDevelopmentProgram/InstitutionFacultyDevelopmentProgram';
import InstitutionSoftSkillsForCollegeStudents from '../pages/InstitutionSoftSkillsForCollegeStudents/InstitutionSoftSkillsForCollegeStudents';
import InstitutionContentCreation from '../pages/InstitutionContentCreation/InstitutionContentCreation';
import InstitutionOnlineOfflinePrograms from '../pages/InstitutionOnlineOfflinePrograms/InstitutionOnlineOfflinePrograms';
import InstitutionItAndNonItPrograms from '../pages/InstitutionItAndNonItPrograms/InstitutionItAndNonItPrograms';
import InstitutionSelfTransformationSessions from '../pages/InstitutionSelfTransformationSessions/InstitutionSelfTransformationSessions';
import InstitutionWeeklyAndMonthlyPrograms from '../pages/InstitutionWeeklyAndMonthlyPrograms/InstitutionWeeklyAndMonthlyPrograms';
import InstitutionExperientialLearningPlatform from '../pages/InstitutionExperientialLearningPlatform/InstitutionExperientialLearningPlatform';
import TurningPharmaReportsIntoRealTimeInsights from '../pages/blog-articles/TurningPharmaReportsIntoRealTimeInsights/TurningPharmaReportsIntoRealTimeInsights';
import ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt from '../pages/blog-articles/ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt/ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt';
import FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan from '../pages/blog-articles/FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan/FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan';
import SqlQueriesOnPandasDataframe from '../pages/blog-articles/SqlQueriesOnPandasDataframe/SqlQueriesOnPandasDataframe';
import AdvantagesOfDataVisualizationTools from '../pages/blog-articles/AdvantagesOfDataVisualizationTools/AdvantagesOfDataVisualizationTools';
import WhenYouOfferVisualizationAnalysis from '../pages/blog-articles/WhenYouOfferVisualizationAnalysis/WhenYouOfferVisualizationAnalysis';
import MakingEveryGraduateEmployable from '../pages/blog-articles/MakingEveryGraduateEmployable/MakingEveryGraduateEmployable';
import WhyIsDataEngineeringAPromisingCareerChoice from '../pages/blog-articles/WhyIsDataEngineeringAPromisingCareerChoice/WhyIsDataEngineeringAPromisingCareerChoice';
import WaysOfCalculatingRoiFromBidwImplementations from '../pages/blog-articles/WaysOfCalculatingRoiFromBidwImplementations/WaysOfCalculatingRoiFromBidwImplementations';
import ImplementationOfAnalyticsInStages from '../pages/blog-articles/ImplementationOfAnalyticsInStages/ImplementationOfAnalyticsInStages';
import NotFound from '../pages/NotFound/NotFound';

import OnlineAssessmentPlatform from '../pages/OnlineAssessmentPlatform/OnlineAssessmentPlatform';
import CodeArena from '../pages/CodeArena/CodeArena';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="programs" element={<Programs />} />
        <Route path="self-learning" element={<SelfLearning />} />
        <Route path="programs/course/:programId" element={<ProgramCourseDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="online-assessment-platform" element={<OnlineAssessmentPlatform />} />
        <Route path="code-arena" element={<CodeArena />} />
        <Route path="learnsmart-lms" element={<LearnSmartLms />} />
        <Route path="lms" element={<Navigate to="/learnsmart-lms" replace />} />
        <Route path="training-upskilling" element={<TrainingUpskilling />} />
        <Route path="training/:slug" element={<TrainingProgram />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="individual-learner" element={<IndividualLearner />} />
        <Route path="institution" element={<Institution />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="testimonials" element={<Navigate to="/" replace />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="thank-you" element={<ThankYou />} />
        <Route path="terms-conditions" element={<TermsConditions />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="courses/data-engineering" element={<DataEngineeringProgram />} />
        <Route
          path="data-engineering-course"
          element={<Navigate to="/courses/data-engineering" replace />}
        />
        <Route
          path="data-engineering-program"
          element={<Navigate to="/courses/data-engineering" replace />}
        />
        <Route path="mern-full-stack-development-course" element={<FullStackMernProgram />} />
        <Route path="java-full-stack-development-course" element={<FullStackJavaProgram />} />
        <Route path="python-full-stack-development-course" element={<FullStackPythonProgram />} />
        <Route path="courses/mern-fullstack" element={<Navigate to="/mern-full-stack-development-course" replace />} />
        <Route path="courses/java-fullstack" element={<Navigate to="/java-full-stack-development-course" replace />} />
        <Route path="courses/python-fullstack" element={<Navigate to="/python-full-stack-development-course" replace />} />
        <Route path="mern-fullstack" element={<Navigate to="/mern-full-stack-development-course" replace />} />
        <Route path="java-fullstack" element={<Navigate to="/java-full-stack-development-course" replace />} />
        <Route path="python-fullstack" element={<Navigate to="/python-full-stack-development-course" replace />} />
        <Route
          path="full-stack-development-mern-program-2"
          element={<Navigate to="/mern-full-stack-development-course" replace />}
        />
        <Route
          path="full-stack-mern-program"
          element={<Navigate to="/mern-full-stack-development-course" replace />}
        />
        <Route path="data-analytics-course" element={<DataAnalyticsProgram />} />
        <Route path="pyspark-course" element={<PysparkProgram />} />
        <Route path="databricks-data-engineering-course" element={<DatabricksDataEngineeringProgram />} />
        <Route path="microsoft-fabric-data-engineering-course" element={<MicrosoftFabricDataEngineeringProgram />} />
        <Route path="tableau-course" element={<TableauProgram />} />
        <Route path="advanced-excel-course" element={<AdvancedExcelProgram />} />
        <Route path="sql-bootcamp" element={<SqlBootcampProgram />} />
        <Route path="python-bootcamp" element={<PythonBootcampProgram />} />
        <Route path="courses/data-science" element={<DataScienceProgram />} />
        <Route
          path="data-science-program"
          element={<Navigate to="/courses/data-science" replace />}
        />
        <Route path="corporate-corporate-training-programs" element={<Navigate to="/corporate" replace />} />
        <Route path="corporate-training" element={<Navigate to="/corporate" replace />} />
        <Route path="corporate-elp" element={<CorporateElp />} />
        <Route path="corporate-content-creation" element={<CorporateContentCreation />} />
        <Route path="institution-expert-talks" element={<InstitutionExpertTalks />} />
        <Route path="institution-epbl" element={<InstitutionEpbl />} />
        <Route path="institution-faculty-development-program" element={<InstitutionFacultyDevelopmentProgram />} />
        <Route path="institution-soft-skills-for-college-students" element={<InstitutionSoftSkillsForCollegeStudents />} />
        <Route path="institution-content-creation" element={<InstitutionContentCreation />} />
        <Route path="institution-online-offline-programs" element={<InstitutionOnlineOfflinePrograms />} />
        <Route path="institution-it-and-non-it-programs-for-institutions" element={<InstitutionItAndNonItPrograms />} />
        <Route path="institution-self-transformation-sessions-for-students-and-faculty" element={<InstitutionSelfTransformationSessions />} />
        <Route path="institution-weekly-and-monthly-programs" element={<InstitutionWeeklyAndMonthlyPrograms />} />
        <Route path="institution-experiential-learning-platform" element={<InstitutionExperientialLearningPlatform />} />
        <Route path="turning-pharma-reports-into-real-time-insights" element={<TurningPharmaReportsIntoRealTimeInsights />} />
        <Route path="the-power-of-communication-why-college-students-must-master-it" element={<ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt />} />
        <Route path="from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan" element={<FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan />} />
        <Route path="sql-queries-on-pandas-dataframe" element={<SqlQueriesOnPandasDataframe />} />
        <Route path="advantages-of-data-visualization-tools" element={<AdvantagesOfDataVisualizationTools />} />
        <Route path="when-you-offer-visualization-analysis" element={<WhenYouOfferVisualizationAnalysis />} />
        <Route path="making-every-graduate-employable" element={<MakingEveryGraduateEmployable />} />
        <Route path="why-is-data-engineering-a-promising-career-choice" element={<WhyIsDataEngineeringAPromisingCareerChoice />} />
        <Route path="ways-of-calculating-roi-from-bidw-implementations" element={<WaysOfCalculatingRoiFromBidwImplementations />} />
        <Route path="implementation-of-analytics-in-stages" element={<ImplementationOfAnalyticsInStages />} />
        <Route path="courses/:slug" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
