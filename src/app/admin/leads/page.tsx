'use client';

import { useState, useEffect } from 'react';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  loanAmount: number;
  monthlyPayment: number;
  timestamp: string;
  ip?: string;
  userAgent?: string;
  createdAt?: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const fetchLeads = async (user: string, pass: string) => {
    try {
      setLoading(true);
      const credentials = btoa(`${user}:${pass}`);
      const response = await fetch('/api/admin/leads', {
        headers: {
          'Authorization': `Basic ${credentials}`,
        },
      });

      if (response.status === 401) {
        setError('Credențiale invalide');
        setIsAuthenticated(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch leads');
      }

      const data = await response.json();
      setLeads(data.leads);
      setIsAuthenticated(true);
      setError('');
    } catch (err: any) {
      setError(err.message || 'Eroare la încărcarea datelor');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (leadId: number, leadEmail: string) => {
    if (!confirm(`Ești sigur că vrei să ștergi lead-ul ${leadEmail}?\n\nAceastă acțiune este definitivă și nu poate fi anulată.`)) {
      return;
    }

    try {
      const credentials = btoa(`${username}:${password}`);
      const response = await fetch(`/api/admin/leads/${leadId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Basic ${credentials}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete lead');
      }

      // Remove from local state
      setLeads(leads.filter(lead => lead.id !== leadId));
      alert('✓ Lead șters cu succes!');
    } catch (err: any) {
      alert('⚠️ Eroare la ștergere: ' + err.message);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetchLeads(username, password);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sage to-mint flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full">
          <h1 className="text-4xl font-black text-gray-900 mb-2">Admin Panel</h1>
          <p className="text-gray-600 mb-8">lend.ro - Leads Management</p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-bold text-gray-700 mb-2">
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none"
                placeholder="admin"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-bold text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-mint focus:outline-none"
                placeholder="••••••••"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
                <p className="text-red-700 text-sm font-semibold">⚠️ {error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-sage text-white py-4 rounded-xl font-black hover:opacity-90 transition"
            >
              Login →
            </button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-6">
            Default credentials: admin / lend2026admin
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-gray-900">Leads Management</h1>
            <p className="text-sm text-gray-600">lend.ro Admin Panel</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Total leads: <span className="font-bold text-mint">{leads.length}</span></p>
            <button
              onClick={() => fetchLeads(username, password)}
              className="text-sm text-sage hover:text-sage/80 font-semibold"
            >
              🔄 Refresh
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-mint border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📭</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No leads yet</h2>
            <p className="text-gray-600">Leads will appear here when users submit the form</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6 border-2 border-gray-100">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-gray-900">{lead.name}</h3>
                    <p className="text-sm text-gray-500">
                      Lead ID: {lead.id} • {new Date(lead.timestamp).toLocaleString('ro-RO')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-mint/10 px-4 py-2 rounded-full">
                      <span className="text-mint font-bold text-sm">{lead.propertyType}</span>
                    </div>
                    <button
                      onClick={() => handleDelete(lead.id, lead.email)}
                      className="w-10 h-10 flex items-center justify-center bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-lg transition-colors"
                      title="Șterge lead (GDPR)"
                      aria-label="Șterge lead"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">📧 Email</p>
                    <a href={`mailto:${lead.email}`} className="text-sage font-semibold hover:underline">
                      {lead.email}
                    </a>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">📱 Telefon</p>
                    <a href={`tel:${lead.phone}`} className="text-sage font-semibold hover:underline">
                      {lead.phone}
                    </a>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 bg-gray-50 rounded-xl p-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">💰 Credit solicitat</p>
                    <p className="text-lg font-black text-gray-900">{lead.loanAmount.toLocaleString('ro-RO')} RON</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">💳 Rată lunară</p>
                    <p className="text-lg font-black text-gray-900">{lead.monthlyPayment.toLocaleString('ro-RO')} RON/lună</p>
                  </div>
                </div>

                {(lead.ip || lead.userAgent) && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      {lead.ip && <>IP: {lead.ip}</>}
                      {lead.ip && lead.userAgent && <> • </>}
                      {lead.userAgent && <>User Agent: {lead.userAgent.substring(0, 60)}...</>}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
