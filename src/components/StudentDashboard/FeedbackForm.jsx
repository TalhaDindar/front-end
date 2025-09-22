import React, { useState } from 'react';

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      alert('Please enter feedback before submitting.');
      return;
    }
    alert('✅ Feedback submitted!');
    setFeedback('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        className="feedback-textarea"
        placeholder="Write your feedback here..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button className="btn" type="submit">Submit feedback</button>
    </form>
  );
}
