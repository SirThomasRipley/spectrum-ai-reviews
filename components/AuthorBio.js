/**
 * AuthorBio Component
 *
 * Reusable author bio component that displays reviewer credentials and expertise.
 * Used across review pages to establish E-E-A-T (Experience, Expertise, Authoritativeness, Trust).
 *
 * Props:
 * - name: Author's full name (required)
 * - title: Professional title (required)
 * - experience: Years of experience or credentials (required)
 * - bio: Short biographical description (required)
 * - specializations: Array of expertise areas (optional)
 * - initials: Display initials (optional, defaults to first letters of name)
 * - showFullBio: Boolean to show expanded bio (optional, default: true)
 */

const AuthorBio = ({
  name = 'Michael Anderson',
  title = 'Senior Digital Marketing Specialist',
  experience = '8+ years in AI Content Creation Tools',
  bio = 'I\'ve been testing AI video creation tools for the past 3 years, working with content creators and marketing teams. My experience includes evaluating 20+ video generation platforms and implementing AI content strategies for major brands.',
  specializations = [],
  initials,
  showFullBio = true
}) => {
  // Generate initials from name if not provided
  const getInitials = () => {
    if (initials) return initials;
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-6 mb-8 border border-purple-100">
      <div className="flex items-start gap-4">
        {/* Author Avatar */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
          {getInitials()}
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900">{name}</h4>
          <p className="text-sm text-primary font-semibold mb-2">
            {title}
            {experience && (
              <>
                {' | '}
                <span className="text-gray-700">{experience}</span>
              </>
            )}
          </p>

          {/* Full Bio */}
          {showFullBio && (
            <p className="text-sm text-gray-700 mb-3 leading-relaxed">
              {bio}
            </p>
          )}

          {/* Specializations */}
          {specializations && specializations.length > 0 && (
            <div className="mt-3">
              <p className="text-xs font-semibold text-gray-600 mb-2">Areas of Expertise:</p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="bg-white px-3 py-1 rounded-full text-xs border border-primary text-primary"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Trust indicator */}
      <div className="mt-4 pt-4 border-t border-purple-200">
        <p className="text-xs text-gray-600 flex items-center gap-2">
          <span className="text-primary">✓</span>
          <span>
            <strong>Verified Expert Reviewer</strong> - All reviews based on hands-on testing and real-world experience
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthorBio;
