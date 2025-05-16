
import React from 'react';
import CTA from '@/components/CTA'; // Re-use the CTA component which contains the form

const QuotePage = () => {
  return (
    // We can reuse the CTA component as it already contains the form and contact info
    // Or create a dedicated layout if needed
    <div className="pt-10"> 
      <CTA />
    </div>
  );
};

export default QuotePage;
  