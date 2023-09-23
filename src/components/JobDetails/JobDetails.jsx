import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar  } from "react-icons/ai";
import { HiOutlineCalendarDays  } from "react-icons/hi2";
import { HiOutlinePhone  } from "react-icons/hi2";
import { MdOutlineEmail  } from "react-icons/md";
import { MdLocationOn  } from "react-icons/md";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    

    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-3xl font-bold text-center">Job Details</h2>

                    <div className="mt-8">
                    <h3 className="font-bold">Job Description: <span className="text-[#757575]">{job.job_description}</span></h3>
                    <br />
                    <h3 className="font-bold">Job Responsibility: <span className="text-[#757575]">{job.job_responsibility}</span></h3>
                    <br />
                    <h3 className="font-bold">Educational Requirements:</h3>
                    <br />
                    <span className="text-xl text-[#757575]">{job.educational_requirements}</span>
                    <br />
                    <br />
                    <h3 className="font-bold">Experiences: </h3>
                    <br />
                    <span className=" text-[#757575]">{job.experiences}</span>
                    <br />
                    <br />
                    </div>
                    
                    <h2>Job Details of: {job.job_title}</h2>
                    <p>{job.company_name}</p>
                    <br />
                    </div>
                <div className="border bg-violet-50 ">
                    <h2 className="text-2xl font-medium ml-8">Job Details</h2>
                    <hr />
                    <br />
                    <div className="ml-3">
                    <h2 className="flex"> <AiOutlineDollar className="text-2xl mr-2 text-[#7E90FE]"></AiOutlineDollar>Salary: {job.salary}</h2>
                    <h2 className="flex"> <HiOutlineCalendarDays className="text-2xl mr-2 text-[#7E90FE]"></HiOutlineCalendarDays>Job Title : {job.job_title}</h2>
                    <br />
                    <h3 className="text-2xl  font-medium">Contact Information</h3>
                    <br />
                    <hr />
                    <br />
                    <h2 className="flex"> <HiOutlinePhone className="text-2xl mr-2 text-[#7E90FE]"></HiOutlinePhone>Phone: {job.contact_information.phone}</h2>
                    <h2 className="flex"> <MdOutlineEmail className="text-2xl mr-2 text-[#7E90FE]"></MdOutlineEmail>Email : {job.contact_information.email}</h2>
                    <h2 className="flex"> <MdLocationOn className="text-2xl mr-2 text-[#7E90FE]"></MdLocationOn>Address : {job.contact_information.address}</h2>
                    <br />
                    </div>
                    <button className="btn btn-primary w-full">Apply Now</button>
                </div>
                

            </div>
        </div>
    );
};

export default JobDetails;