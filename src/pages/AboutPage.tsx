import { Card, CardContent } from '../components/ui/card'
import { Users, Target, Award } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above everything else.'
    },
    {
      icon: Target,
      title: 'Quality Products',
      description: 'Every product in our store is carefully selected for quality and value.'
    },
    {
      icon: Award,
      title: 'Trusted Service',
      description: 'Years of reliable service and thousands of happy customers.'
    }
  ]

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in e-commerce'
    },
    {
      name: 'Sarah Williams',
      role: 'COO',
      description: 'Operations expert ensuring smooth customer experience'
    },
    {
      name: 'Mike Chen',
      role: 'CTO',
      description: 'Tech innovator driving our digital transformation'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About ShopHub</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to make quality products accessible to everyone, 
          everywhere. Since 2020, we've been serving customers with dedication and passion.
        </p>
      </div>

      {/* Mission Section */}
      <section className="mb-16">
        <Card className="bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              To provide exceptional shopping experiences by offering carefully curated products, 
              outstanding customer service, and innovative solutions that make life better.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <value.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">1000+</div>
            <div className="text-gray-600">Products</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-indigo-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center p-6">
              <CardContent className="pt-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}