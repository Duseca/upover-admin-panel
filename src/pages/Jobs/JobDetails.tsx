import { useParams } from "react-router-dom";
import type { JobProps } from "./Jobs";
import { dummyJobs } from "../../components/data";
import Header from "../../layouts/partials/Header";
import JobOverviewCard from "../../components/Cards/JobOverviewCard";
import EngagementMetrics from "../../components/EngagementMetrics";
import CommentsSection from "../../components/Cards/CommentsSection";
import JobImagesCard from "../../components/Cards/JobImagesCard";
import QuickActionsCard from "../../components/Cards/QuickActionsCard";
import ActivityLogCard from "../../components/Cards/ActivityLogCard";

const JobDetails = () => {
  const { id } = useParams<{ id: string }>();
  const job: JobProps | undefined = dummyJobs.find((j) => j.id === Number(id));
  if (!job) return <div>Job not found</div>;

  return (
 <div>
  <Header header={"Manage Jobs"} link="/service" />
  <div className="max-w-screen-2xl mx-auto px-4 py-6">
    <div className="grid grid-cols-12 gap-8">
      {/* Main Content */}
      <div className="col-span-12 lg:col-span-8 space-y-8">
        <JobOverviewCard job={job} />
        <EngagementMetrics job={job} />
        <CommentsSection comments={job.commentsList} />
      </div>

      {/* Sidebar */}
      <div className="col-span-12 lg:col-span-4 space-y-8">
        <JobImagesCard images={job.images} />
        <QuickActionsCard />
        <ActivityLogCard />
      </div>
    </div>
  </div>
</div>

  );
};

export default JobDetails;
