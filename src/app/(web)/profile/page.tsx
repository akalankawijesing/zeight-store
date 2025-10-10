'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { User, Package, Heart, MapPin, CreditCard, Settings, ChevronRight, ShoppingBag, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');
  const { data: session, status } = useSession();

  // Loading state
  if (status === 'loading') {
    return (
      <div className="bg-gray-50 min-h-screen py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-gray-600" />
      </div>
    );
  }

  // Not authenticated
  if (!session?.user) {
    return (
      <div className="bg-gray-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <User className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-light text-gray-900 mb-2">Sign in to view your profile</h2>
            <p className="text-gray-500 mb-6">Access your orders, wishlist, and account settings</p>
            <div className="flex items-center justify-center space-x-4">
              <Button asChild>
                <Link href="/auth/login">Sign In</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth/register">Create Account</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get user initials for avatar
  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const userInitials = getInitials(session.user.name);

  const orders = [
    { id: "ORD-2845", date: "Oct 5, 2025", status: "Delivered", total: "$324.00", items: 3 },
    { id: "ORD-2721", date: "Sep 18, 2025", status: "In Transit", total: "$189.50", items: 2 },
    { id: "ORD-2654", date: "Aug 30, 2025", status: "Delivered", total: "$456.00", items: 4 }
  ];

  const wishlist = [
    { name: "Silk Blend Blazer", price: "$298.00", image: "🧥" },
    { name: "Cashmere Sweater", price: "$185.00", image: "👔" },
    { name: "Tailored Trousers", price: "$165.00", image: "👖" }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-800 to-gray-600 rounded-full flex items-center justify-center text-white text-3xl font-light">
                {userInitials}
              </div>
              <div>
                <h1 className="text-3xl font-light text-gray-900 mb-1">
                  {session.user.name || 'Guest User'}
                </h1>
                <p className="text-gray-500 mb-2">{session.user.email}</p>
                <p className="text-sm text-gray-400">Member since January 2024</p>
              </div>
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Settings className="w-4 h-4" />
              <span className="text-sm">Edit Profile</span>
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex overflow-x-auto space-x-8 px-8">
              {[
                { id: 'overview', label: 'Overview', icon: User },
                { id: 'orders', label: 'Orders', icon: Package },
                { id: 'wishlist', label: 'Wishlist', icon: Heart },
                { id: 'addresses', label: 'Addresses', icon: MapPin },
                { id: 'payment', label: 'Payment', icon: CreditCard }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 border-b-2 transition whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {activeTab === 'overview' && (
              <>
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-light text-gray-900 mb-6">Recent Orders</h2>
                  <div className="space-y-4">
                    {orders.slice(0, 2).map(order => (
                      <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-md hover:border-gray-300 transition cursor-pointer">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">
                            <ShoppingBag className="w-6 h-6 text-gray-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-500">{order.date} • {order.items} items</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-right">
                            <p className="font-medium text-gray-900">{order.total}</p>
                            <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}`}>
                              {order.status}
                            </p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button variant="ghost" className="w-full mt-4" asChild>
                    <Link href="/orders">View All Orders</Link>
                  </Button>
                </div>

                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h2 className="text-xl font-light text-gray-900 mb-6">Account Stats</h2>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-3xl font-light text-gray-900 mb-1">12</p>
                      <p className="text-sm text-gray-500">Total Orders</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-3xl font-light text-gray-900 mb-1">8</p>
                      <p className="text-sm text-gray-500">Wishlist Items</p>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <p className="text-3xl font-light text-gray-900 mb-1">$1.2k</p>
                      <p className="text-sm text-gray-500">Total Spent</p>
                    </div>
                  </div>
                </div>
              </>
            )}

            {activeTab === 'orders' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-light text-gray-900 mb-6">Order History</h2>
                <div className="space-y-4">
                  {orders.map(order => (
                    <div key={order.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border border-gray-200 rounded-md hover:border-gray-300 transition cursor-pointer gap-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                          <Package className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{order.id}</p>
                          <p className="text-sm text-gray-500">{order.date} • {order.items} items</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 w-full sm:w-auto justify-between sm:justify-end">
                        <div className="text-left sm:text-right">
                          <p className="font-medium text-gray-900">{order.total}</p>
                          <p className={`text-sm ${order.status === 'Delivered' ? 'text-green-600' : 'text-blue-600'}`}>
                            {order.status}
                          </p>
                        </div>
                        <ChevronRight className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'wishlist' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-light text-gray-900 mb-6">My Wishlist</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {wishlist.map((item, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition">
                      <div className="text-6xl mb-4">{item.image}</div>
                      <h3 className="font-medium text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.price}</p>
                      <Button className="w-full">
                        Add to Cart
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'addresses' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-light text-gray-900 mb-6">Saved Addresses</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-medium text-gray-900">Home</p>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Default</span>
                    </div>
                    <p className="text-sm text-gray-600">123 Main Street</p>
                    <p className="text-sm text-gray-600">Maharagama, Western Province</p>
                    <p className="text-sm text-gray-600">Sri Lanka</p>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add New Address
                  </Button>
                </div>
              </div>
            )}

            {activeTab === 'payment' && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-light text-gray-900 mb-6">Payment Methods</h2>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <CreditCard className="w-8 h-8 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">•••• •••• •••• 4242</p>
                          <p className="text-sm text-gray-500">Expires 12/25</p>
                        </div>
                      </div>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">Default</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Add Payment Method
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Rewards Program</h3>
              <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-lg p-4 mb-4">
                <p className="text-sm opacity-90 mb-1">Available Points</p>
                <p className="text-3xl font-light">1,250</p>
              </div>
              <p className="text-sm text-gray-600 mb-3">You&apos;re 250 points away from a $25 reward!</p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gray-900 h-2 rounded-full" style={{ width: '83%' }}></div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/orders">Track Order</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Return Item
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Contact Support
                </Button>
              </div>
            </div>

            <div className="bg-gray-900 text-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium mb-2">Exclusive Member Offer</h3>
              <p className="text-sm opacity-90 mb-4">Get 20% off your next purchase with code MEMBER20</p>
              <Button className="w-full bg-white text-gray-900 hover:bg-gray-100">
                Shop Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}