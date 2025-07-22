'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateHealthParameters() {
  const router = useRouter();

  const [form, setForm] = useState({
    spo2: '',
    ecg: '',
    heartRate: '',
    bodyTemp: '',
    gsr: ''
  });

  const [userId, setUserId] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.id) {
      setUserId(storedUser.id);
    }
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user: userId,
      ...form,
      spo2: Number(form.spo2),
      ecg: Number(form.ecg),
      heartRate: Number(form.heartRate),
      bodyTemp: Number(form.bodyTemp),
      gsr: Number(form.gsr)
    };

    const res = await fetch('/api/health', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (res.ok) {
      alert('Health parameters submitted successfully');
      router.push('/report'); // or wherever you want to redirect
    } else {
      alert('Failed to submit health parameters');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Submit Health Parameters</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {["spo2", "ecg", "heartRate", "bodyTemp", "gsr"].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">{field}</label>
              <input
                type="number"
                name={field}
                value={form[field]}
                onChange={handleChange}
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
