
import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { activities } from "../data/mockData";

const ActivityDetail = () => {
  const { id } = useParams();
  const activity = activities.find((a) => a.id === Number(id));

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Activity Not Found</h2>
          <Link to="/activities" className="text-primary hover:underline">
            Back to List
          </Link>
        </div>
      </div>
    );
  }

  // Split content by newline to render paragraphs
  const renderContent = (content: string) => {
    return content.split('\n').map((paragraph, index) => {
      // Remove leading/trailing whitespace
      const trimmed = paragraph.trim();
      if (!trimmed) return null;
      
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/activities"
          className="inline-flex items-center text-gray-600 hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to List
        </Link>

        <article className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="h-96 w-full">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="p-8 md:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              {activity.date}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              {activity.title}
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl text-gray-600 mb-8 border-l-4 border-primary pl-4 italic">
                {activity.summary}
              </p>
              
              <div className="mt-8">
                {activity.content ? renderContent(activity.content) : (
                  <p className="text-gray-500 italic">No detailed content available.</p>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ActivityDetail;
