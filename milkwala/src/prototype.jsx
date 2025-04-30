import React from 'react';
import './Prototype.css';

const Prototype = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-sans text-gray-800">
      {/* Top Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Register Box */}
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm text-gray-500">Register #284 <span className="text-purple-600">Pending</span></h3>
              <h2 className="text-2xl font-bold text-gray-900 mt-1">$103,450.50</h2>
            </div>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/40?img=${i + 1}`} alt="avatar" />
              ))}
              <span className="ml-2 text-sm text-gray-600">+19</span>
            </div>
          </div>
          <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">Send Payouts</button>
        </div>

        {/* New Register */}
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200">
          <h3 className="text-sm text-gray-500 mb-2">New Register</h3>
          <p className="text-sm text-gray-600 mb-4">Payout register to select employees</p>
          <div className="flex gap-2">
            <button className="flex-1 py-2 border border-gray-300 rounded hover:bg-gray-50">Import</button>
            <button className="flex-1 py-2 border border-gray-300 rounded hover:bg-gray-50">Manual</button>
          </div>
        </div>

        {/* Schedules */}
        <div className="p-4 bg-white shadow-md rounded-lg border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm text-gray-500">Schedules</h3>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-green-500 transition-colors">
                <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform peer-checked:translate-x-5"></div>
              </div>
            </label>
          </div>
          <p className="text-sm text-gray-600">2 active payout schedules</p>
          <button className="mt-auto py-2 border border-gray-300 rounded hover:bg-gray-50">Setup...</button>
        </div>
      </div>

      {/* Payments and Roster */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Payments */}
        <div className="lg:col-span-2 bg-white p-4 shadow-md rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-900">Register #281</h3>
            <div className="text-sm text-gray-500">Total: $67,920.40 · 12 Oct, 2:52pm</div>
          </div>
          <input type="text" placeholder="Search employees" className="w-full p-2 border border-gray-300 rounded mb-4" />

          <div className="space-y-2">
            {[
              { id: '934652', name: 'Alia Bonner', amount: '$4,120.00', status: 'Pending' },
              { id: '934652', name: 'Carmen Lucas', amount: '$2,450.20', status: 'Pending' },
              { id: '934652', name: 'Millie Tran', amount: '$3,740.30', status: 'Paid' },
              { id: '934652', name: 'Sasha Turner', amount: '$3,980.00', status: 'Paid' },
              { id: '934652', name: 'Terry Melton', amount: '$1,915.00', status: 'Paid' },
              { id: '934652', name: 'Maddie Molina', amount: '$4,065.00', status: 'Paid' },
              { id: '934652', name: 'Charles Garza', amount: '$2,810.00', status: 'Paid' },
            ].map((user, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <img src={`https://i.pravatar.cc/40?img=${index + 1}`} alt="avatar" className="w-6 h-6 rounded-full mr-2" />
                  <span className="text-gray-700">{user.name}</span>
                </div>
                <span className="text-gray-600 font-medium">{user.amount}</span>
                <span className={`px-2 py-1 rounded text-xs ${user.status === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-purple-100 text-purple-700'}`}>
                  {user.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Roster */}
        <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200">
          <div className="flex justify-between mb-2">
            <input type="text" placeholder="Search employees" className="w-full p-2 border border-gray-300 rounded" />
            <button className="text-purple-600 text-sm hover:underline">Clear selection</button>
          </div>
          <div className="space-y-2 text-sm">
            {[
              { name: 'Adem Barnes', checked: false },
              { name: 'Jasmin Lowery', checked: false },
              { name: 'Katrina Malone', checked: true },
              { name: 'Tanisha Combs', checked: true },
              { name: 'Vinnie Atkinson', checked: false },
              { name: 'Samia Moon', checked: false },
            ].map((person, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-200">
                <div className="flex items-center">
                  <img src={`https://i.pravatar.cc/40?img=${index + 6}`} alt="avatar" className="w-6 h-6 rounded-full mr-2" />
                  <span className="text-gray-700">{person.name}</span>
                </div>
                {person.checked && <span className="text-purple-600 font-bold">✔</span>}
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 border border-gray-300 rounded hover:bg-gray-50">Add to register...</button>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white p-4 shadow-md rounded-lg border border-gray-200 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-gray-900">Income vs Expense</h3>
          <div className="flex space-x-4 text-sm text-gray-500">
            <span className="hover:text-gray-700 cursor-pointer">All Payments</span>
            <span className="hover:text-gray-700 cursor-pointer">Weeks</span>
            <span className="hover:text-gray-700 cursor-pointer">This Year</span>
          </div>
        </div>
        <div className="relative">
          <svg className="w-full h-48">
            <path d="M10 120 Q 50 100 90 120 T 150 120 T 210 120 T 270 120" stroke="green" fill="none" strokeWidth="2" />
            <path d="M10 120 Q 50 140 90 120 T 150 140 T 210 120 T 270 120" stroke="red" fill="none" strokeWidth="2" />
            <circle cx="210" cy="120" r="4" fill="black" />
            <text x="210" y="110" textAnchor="middle" fontSize="10" fill="black">$19,980.60</text>
            <text x="210" y="125" textAnchor="middle" fontSize="8" fill="gray">Aug 4 - Aug 10</text>
            {/* X-axis labels */}
            <text x="10" y="140" fontSize="8" fill="gray">Jan</text>
            <text x="60" y="140" fontSize="8" fill="gray">Feb</text>
            <text x="110" y="140" fontSize="8" fill="gray">Mar</text>
            <text x="160" y="140" fontSize="8" fill="gray">Apr</text>
            <text x="210" y="140" fontSize="8" fill="gray">May</text>
            <text x="260" y="140" fontSize="8" fill="gray">Jun</text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Prototype;