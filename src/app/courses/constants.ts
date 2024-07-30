import { FC } from 'react'
import { Partners } from '@/modules/Partners'
import { AverageSalary, AverageSalaryStepBox, AverageSalaryStepLine } from '@/widgets/AverageSalary'
import { Certificate } from '@/widgets/Certificate'
import { CourseAdvantages } from '@/widgets/CourseAdvantages'
import { CourseAudience } from '@/widgets/CourseAudience'
import { CourseBonuses } from '@/widgets/CourseBonuses'
import { CourseCallback } from '@/widgets/CourseCallback'
import { CourseContents } from '@/widgets/CourseContents'
import { CourseEnrollmentBenefits } from '@/widgets/CourseEnrollmentBenefits'
import { CourseHomework } from '@/widgets/CourseHomework'
import { CourseLessonCallback } from '@/widgets/CourseLessonCallback/CourseLessonCallback'
import { CourseMentors } from '@/widgets/CourseMentors'
import { CourseOtherInfo } from '@/widgets/CourseOtherInfo'
import { CourseStructure } from '@/widgets/CourseStructure'
import { CourseTechnologies } from '@/widgets/CourseTechnologies'
import { CourseTextFeedback } from '@/widgets/CourseTextFeedback'
import { CourseTextFeedbacks } from '@/widgets/CourseTextFeedbacks'
import { Employment } from '@/widgets/Employment'
import { FAQ } from '@/widgets/FAQ'
import { GraduateOpportunities } from '@/widgets/GraduateOpportunities'
import { ITBenefits } from '@/widgets/ITBenefits'
import { Networking } from '@/widgets/Networking'
import { OpenToAllLearners } from '@/widgets/OpenToAllLearners'
import { PlatformGuide } from '@/widgets/PlatformGuide'
import { PortfolioProjects } from '@/widgets/PortfolioProjects'
import { Practice } from '@/widgets/Practice'
import { ProfessionInfo } from '@/widgets/ProfessionInfo'
import { ProfessionInfoProgress } from '@/widgets/ProfessionInfoProgress'
import { StudentCompetitionProjects } from '@/widgets/StudentCompetitionProjects'
import { StudentsProjects } from '@/widgets/StudentsProjects'
import { StudentSupport } from '@/widgets/StudentSupport'
import { StudentWorkShowCase } from '@/widgets/StudentWorkShowCase'
import { SupportRoadmap } from '@/widgets/SupportRoadmap'

type Props = {
  id: number
}

export const CoursePageModules: Record<string, FC<Props>> = {
  [AverageSalary.displayName]: AverageSalary,
  [AverageSalaryStepBox.displayName]: AverageSalaryStepBox,
  [AverageSalaryStepLine.displayName]: AverageSalaryStepLine,
  [CourseAudience.displayName]: CourseAudience,
  [CourseStructure.displayName]: CourseStructure,
  [CourseTechnologies.displayName]: CourseTechnologies,
  [CourseContents.displayName]: CourseContents,
  [CourseMentors.displayName]: CourseMentors,
  [SupportRoadmap.displayName]: SupportRoadmap,
  [StudentsProjects.displayName]: StudentsProjects,
  [ITBenefits.displayName]: ITBenefits,
  [CourseEnrollmentBenefits.displayName]: CourseEnrollmentBenefits,
  [ProfessionInfo.displayName]: ProfessionInfo,
  [ProfessionInfoProgress.displayName]: ProfessionInfoProgress,
  [CourseBonuses.displayName]: CourseBonuses,
  [OpenToAllLearners.displayName]: OpenToAllLearners,
  [CourseAdvantages.displayName]: CourseAdvantages,
  [StudentWorkShowCase.displayName]: StudentWorkShowCase,
  [PortfolioProjects.displayName]: PortfolioProjects,
  [PlatformGuide.displayName]: PlatformGuide,
  [CourseHomework.displayName]: CourseHomework,
  [StudentCompetitionProjects.displayName]: StudentCompetitionProjects,
  [Practice.displayName]: Practice,
  [Employment.displayName]: Employment,
  [CourseTextFeedbacks.displayName]: CourseTextFeedbacks,
  [CourseContents.displayName]: CourseContents,
  [Certificate.displayName]: Certificate,
  [GraduateOpportunities.displayName]: GraduateOpportunities,
  [StudentSupport.displayName]: StudentSupport,
  [Networking.displayName]: Networking,
  [Partners.displayName]: Partners,
  [FAQ.displayName]: FAQ,
  [CourseAdvantages.displayName]: CourseAdvantages,
  [CourseOtherInfo.displayName]: CourseOtherInfo,
  [CourseCallback.displayName]: CourseCallback,
  [CourseLessonCallback.displayName]: CourseLessonCallback,
  [CourseTextFeedback.displayName]: CourseTextFeedback,
}

// TODO: replace with real data
export const coursePageModulesSort = [
  CourseEnrollmentBenefits.displayName,
  ProfessionInfo.displayName,
  ProfessionInfoProgress.displayName,
  AverageSalaryStepBox.displayName,
  AverageSalaryStepLine.displayName,
  AverageSalary.displayName,
  ITBenefits.displayName,
  CourseAdvantages.displayName,
  CourseAudience.displayName,
  StudentWorkShowCase.displayName,
  OpenToAllLearners.displayName,
  CourseStructure.displayName,
  CourseTechnologies.displayName,
  PortfolioProjects.displayName,
  CourseCallback.displayName,
  PlatformGuide.displayName,
  CourseHomework.displayName,
  StudentCompetitionProjects.displayName,
  SupportRoadmap.displayName,
  CourseMentors.displayName,
  Practice.displayName,
  Employment.displayName,
  CourseTextFeedbacks.displayName,
  StudentsProjects.displayName,
  CourseContents.displayName,
  CourseLessonCallback.displayName,
  Certificate.displayName,
  CourseOtherInfo.displayName,
  GraduateOpportunities.displayName,
  Networking.displayName,
  CourseBonuses.displayName,
  Partners.displayName,
  FAQ.displayName,
  CourseOtherInfo.displayName,
  CourseTextFeedback.displayName,
]
