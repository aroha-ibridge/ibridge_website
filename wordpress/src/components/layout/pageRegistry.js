/**
 * Pathname → React page component map for SiteShell islands.
 * Astro cannot serialize component-function props across hydration;
 * look up the page by pathname instead.
 */
import Home from '../../views/Home/Home';
import AboutUs from '../../views/AboutUs/AboutUs';
import Programs from '../../views/Programs/Programs';
import SelfLearning from '../../views/SelfLearning/SelfLearning';
import ProgramCourseDetail from '../../views/Programs/ProgramCourseDetail';
import Products from '../../views/Products/Products';
import OnlineAssessmentPlatform from '../../views/OnlineAssessmentPlatform/OnlineAssessmentPlatform';
import CodeArena from '../../views/CodeArena/CodeArena';
import LearnSmartLms from '../../views/LearnSmartLms/LearnSmartLms';
import TrainingUpskilling from '../../views/TrainingUpskilling/TrainingUpskilling';
import TrainingProgram from '../../views/TrainingProgram/TrainingProgram';
import Corporate from '../../views/Corporate/Corporate';
import IndividualLearner from '../../views/IndividualLearner/IndividualLearner';
import Institution from '../../views/Institution/Institution';
import Blogs from '../../views/Blogs/Blogs';
import ContactUs from '../../views/ContactUs/ContactUs';
import BookCareerCounselling from '../../views/BookCareerCounselling/BookCareerCounselling';
import ThankYou from '../../views/ThankYou/ThankYou';
import TermsConditions from '../../views/TermsConditions/TermsConditions';
import PrivacyPolicy from '../../views/PrivacyPolicy/PrivacyPolicy';
import DataEngineeringProgram from '../../views/DataEngineeringProgram/DataEngineeringProgram';
import FullStackMernProgram from '../../views/FullStackMernProgram/FullStackMernProgram';
import FullStackJavaProgram from '../../views/FullStackJavaProgram/FullStackJavaProgram';
import FullStackPythonProgram from '../../views/FullStackPythonProgram/FullStackPythonProgram';
import DataScienceProgram from '../../views/DataScienceProgram/DataScienceProgram';
import DataAnalyticsProgram from '../../views/DataAnalyticsProgram/DataAnalyticsProgram';
import PysparkProgram from '../../views/PysparkProgram/PysparkProgram';
import DatabricksDataEngineeringProgram from '../../views/DatabricksDataEngineeringProgram/DatabricksDataEngineeringProgram';
import MicrosoftFabricDataEngineeringProgram from '../../views/MicrosoftFabricDataEngineeringProgram/MicrosoftFabricDataEngineeringProgram';
import TableauProgram from '../../views/TableauProgram/TableauProgram';
import AdvancedExcelProgram from '../../views/AdvancedExcelProgram/AdvancedExcelProgram';
import SqlBootcampProgram from '../../views/SqlBootcampProgram/SqlBootcampProgram';
import PythonBootcampProgram from '../../views/PythonBootcampProgram/PythonBootcampProgram';
import CorporateElp from '../../views/CorporateElp/CorporateElp';
import CorporateContentCreation from '../../views/CorporateContentCreation/CorporateContentCreation';
import InstitutionExpertTalks from '../../views/InstitutionExpertTalks/InstitutionExpertTalks';
import InstitutionEpbl from '../../views/InstitutionEpbl/InstitutionEpbl';
import InstitutionFacultyDevelopmentProgram from '../../views/InstitutionFacultyDevelopmentProgram/InstitutionFacultyDevelopmentProgram';
import InstitutionSoftSkillsForCollegeStudents from '../../views/InstitutionSoftSkillsForCollegeStudents/InstitutionSoftSkillsForCollegeStudents';
import InstitutionContentCreation from '../../views/InstitutionContentCreation/InstitutionContentCreation';
import InstitutionOnlineOfflinePrograms from '../../views/InstitutionOnlineOfflinePrograms/InstitutionOnlineOfflinePrograms';
import InstitutionItAndNonItPrograms from '../../views/InstitutionItAndNonItPrograms/InstitutionItAndNonItPrograms';
import InstitutionSelfTransformationSessions from '../../views/InstitutionSelfTransformationSessions/InstitutionSelfTransformationSessions';
import InstitutionWeeklyAndMonthlyPrograms from '../../views/InstitutionWeeklyAndMonthlyPrograms/InstitutionWeeklyAndMonthlyPrograms';
import InstitutionExperientialLearningPlatform from '../../views/InstitutionExperientialLearningPlatform/InstitutionExperientialLearningPlatform';
import TurningPharmaReportsIntoRealTimeInsights from '../../views/blog-articles/TurningPharmaReportsIntoRealTimeInsights/TurningPharmaReportsIntoRealTimeInsights';
import ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt from '../../views/blog-articles/ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt/ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt';
import FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan from '../../views/blog-articles/FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan/FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan';
import SqlQueriesOnPandasDataframe from '../../views/blog-articles/SqlQueriesOnPandasDataframe/SqlQueriesOnPandasDataframe';
import AdvantagesOfDataVisualizationTools from '../../views/blog-articles/AdvantagesOfDataVisualizationTools/AdvantagesOfDataVisualizationTools';
import WhenYouOfferVisualizationAnalysis from '../../views/blog-articles/WhenYouOfferVisualizationAnalysis/WhenYouOfferVisualizationAnalysis';
import MakingEveryGraduateEmployable from '../../views/blog-articles/MakingEveryGraduateEmployable/MakingEveryGraduateEmployable';
import WhyIsDataEngineeringAPromisingCareerChoice from '../../views/blog-articles/WhyIsDataEngineeringAPromisingCareerChoice/WhyIsDataEngineeringAPromisingCareerChoice';
import WaysOfCalculatingRoiFromBidwImplementations from '../../views/blog-articles/WaysOfCalculatingRoiFromBidwImplementations/WaysOfCalculatingRoiFromBidwImplementations';
import ImplementationOfAnalyticsInStages from '../../views/blog-articles/ImplementationOfAnalyticsInStages/ImplementationOfAnalyticsInStages';
import NotFound from '../../views/NotFound/NotFound';

export const PAGE_COMPONENTS = {
  '/': Home,
  '/about-us': AboutUs,
  '/programs': Programs,
  '/self-learning': SelfLearning,
  '/programs/course': ProgramCourseDetail,
  '/products': Products,
  '/online-assessment-platform': OnlineAssessmentPlatform,
  '/code-arena': CodeArena,
  '/learnsmart-lms': LearnSmartLms,
  '/training-upskilling': TrainingUpskilling,
  '/training': TrainingProgram,
  '/corporate': Corporate,
  '/individual-learner': IndividualLearner,
  '/institution': Institution,
  '/blogs': Blogs,
  '/contact-us': ContactUs,
  '/book-career-counselling': BookCareerCounselling,
  '/thank-you': ThankYou,
  '/terms-conditions': TermsConditions,
  '/privacy-policy': PrivacyPolicy,
  '/courses/data-engineering': DataEngineeringProgram,
  '/data-analytics-course': DataAnalyticsProgram,
  '/pyspark-course': PysparkProgram,
  '/databricks-data-engineering-course': DatabricksDataEngineeringProgram,
  '/microsoft-fabric-data-engineering-course': MicrosoftFabricDataEngineeringProgram,
  '/tableau-course': TableauProgram,
  '/advanced-excel-course': AdvancedExcelProgram,
  '/sql-bootcamp': SqlBootcampProgram,
  '/python-bootcamp': PythonBootcampProgram,
  '/courses/data-science': DataScienceProgram,
  '/mern-full-stack-development-course': FullStackMernProgram,
  '/java-full-stack-development-course': FullStackJavaProgram,
  '/python-full-stack-development-course': FullStackPythonProgram,
  '/corporate-elp': CorporateElp,
  '/corporate-content-creation': CorporateContentCreation,
  '/institution-expert-talks': InstitutionExpertTalks,
  '/institution-epbl': InstitutionEpbl,
  '/institution-faculty-development-program': InstitutionFacultyDevelopmentProgram,
  '/institution-soft-skills-for-college-students': InstitutionSoftSkillsForCollegeStudents,
  '/institution-content-creation': InstitutionContentCreation,
  '/institution-online-offline-programs': InstitutionOnlineOfflinePrograms,
  '/institution-it-and-non-it-programs-for-institutions': InstitutionItAndNonItPrograms,
  '/institution-self-transformation-sessions-for-students-and-faculty':
    InstitutionSelfTransformationSessions,
  '/institution-weekly-and-monthly-programs': InstitutionWeeklyAndMonthlyPrograms,
  '/institution-experiential-learning-platform': InstitutionExperientialLearningPlatform,
  '/turning-pharma-reports-into-real-time-insights': TurningPharmaReportsIntoRealTimeInsights,
  '/the-power-of-communication-why-college-students-must-master-it':
    ThePowerOfCommunicationWhyCollegeStudentsMustMasterIt,
  '/from-concept-to-clarity-breaking-down-llms-for-everyone-by-s-n-raghavan':
    FromConceptToClarityBreakingDownLlmsForEveryoneBySNRaghavan,
  '/sql-queries-on-pandas-dataframe': SqlQueriesOnPandasDataframe,
  '/advantages-of-data-visualization-tools': AdvantagesOfDataVisualizationTools,
  '/when-you-offer-visualization-analysis': WhenYouOfferVisualizationAnalysis,
  '/making-every-graduate-employable': MakingEveryGraduateEmployable,
  '/why-is-data-engineering-a-promising-career-choice': WhyIsDataEngineeringAPromisingCareerChoice,
  '/ways-of-calculating-roi-from-bidw-implementations': WaysOfCalculatingRoiFromBidwImplementations,
  '/implementation-of-analytics-in-stages': ImplementationOfAnalyticsInStages,
  '/404': NotFound,
};

export function resolvePageComponent(pathname = '/') {
  const path = (pathname || '/').replace(/\/+$/, '') || '/';

  if (PAGE_COMPONENTS[path]) return PAGE_COMPONENTS[path];

  if (path.startsWith('/programs/course/')) return PAGE_COMPONENTS['/programs/course'];
  if (path.startsWith('/training/') && path !== '/training-upskilling') {
    return PAGE_COMPONENTS['/training'];
  }

  return NotFound;
}
