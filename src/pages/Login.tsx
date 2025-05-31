
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  // Signup form state
  const [signupData, setSignupData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    userType: '',
    universityName: '',
    course: '',
    rollNo: '',
    department: '',
    jobEnrollmentNo: '',
    companyName: '',
    fieldOfWork: '',
    registrationNo: ''
  });

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Login Successful",
        description: "Welcome back to AMOGH!",
      });
      navigate('/');
    }, 1000);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (!signupData.userType) {
      toast({
        title: "Error",
        description: "Please select a user type",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account Created",
        description: "Welcome to AMOGH! Please verify your email.",
      });
      navigate('/');
    }, 1000);
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Google Login",
      description: "Google authentication coming soon!",
    });
  };

  const handleGitHubLogin = () => {
    toast({
      title: "GitHub Login",
      description: "GitHub authentication coming soon!",
    });
  };

  const renderUserTypeFields = () => {
    switch (signupData.userType) {
      case 'student':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="universityName">University Name</Label>
                <Input
                  id="universityName"
                  value={signupData.universityName}
                  onChange={(e) => setSignupData({...signupData, universityName: e.target.value})}
                  placeholder="Enter university name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="course">Course</Label>
                <Input
                  id="course"
                  value={signupData.course}
                  onChange={(e) => setSignupData({...signupData, course: e.target.value})}
                  placeholder="Enter course name"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="rollNo">Roll Number</Label>
              <Input
                id="rollNo"
                value={signupData.rollNo}
                onChange={(e) => setSignupData({...signupData, rollNo: e.target.value})}
                placeholder="Enter roll number"
                required
              />
            </div>
          </>
        );
      case 'professor':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="universityName">University Name</Label>
                <Input
                  id="universityName"
                  value={signupData.universityName}
                  onChange={(e) => setSignupData({...signupData, universityName: e.target.value})}
                  placeholder="Enter university name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input
                  id="department"
                  value={signupData.department}
                  onChange={(e) => setSignupData({...signupData, department: e.target.value})}
                  placeholder="Enter department"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="jobEnrollmentNo">Job Enrollment Number</Label>
              <Input
                id="jobEnrollmentNo"
                value={signupData.jobEnrollmentNo}
                onChange={(e) => setSignupData({...signupData, jobEnrollmentNo: e.target.value})}
                placeholder="Enter job enrollment number"
                required
              />
            </div>
          </>
        );
      case 'enterprise':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input
                  id="companyName"
                  value={signupData.companyName}
                  onChange={(e) => setSignupData({...signupData, companyName: e.target.value})}
                  placeholder="Enter company name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="fieldOfWork">Field of Work</Label>
                <Input
                  id="fieldOfWork"
                  value={signupData.fieldOfWork}
                  onChange={(e) => setSignupData({...signupData, fieldOfWork: e.target.value})}
                  placeholder="Enter field of work"
                  required
                />
              </div>
            </div>
            <div>
              <Label htmlFor="registrationNo">Registration Number</Label>
              <Input
                id="registrationNo"
                value={signupData.registrationNo}
                onChange={(e) => setSignupData({...signupData, registrationNo: e.target.value})}
                placeholder="Enter registration number"
                required
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amogh-light to-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="text-3xl font-bold text-amogh-navy hover:text-amogh-blue transition-colors">
            AMOGH
          </Link>
          <p className="text-gray-600 mt-2">Join the innovation marketplace</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-center text-amogh-navy">Welcome</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="login-username">Username</Label>
                    <Input
                      id="login-username"
                      type="text"
                      value={loginData.username}
                      onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                      placeholder="Enter your username"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="login-password">Password</Label>
                    <Input
                      id="login-password"
                      type="password"
                      value={loginData.password}
                      onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-amogh-blue hover:bg-amogh-ocean" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging in...' : 'Login'}
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="signup-username">Username</Label>
                      <Input
                        id="signup-username"
                        type="text"
                        value={signupData.username}
                        onChange={(e) => setSignupData({...signupData, username: e.target.value})}
                        placeholder="Choose a username"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="userType">User Type</Label>
                      <Select onValueChange={(value) => setSignupData({...signupData, userType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select user type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="professor">Professor</SelectItem>
                          <SelectItem value="enterprise">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={signupData.password}
                        onChange={(e) => setSignupData({...signupData, password: e.target.value})}
                        placeholder="Create a password"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={signupData.confirmPassword}
                        onChange={(e) => setSignupData({...signupData, confirmPassword: e.target.value})}
                        placeholder="Confirm your password"
                        required
                      />
                    </div>
                  </div>

                  {renderUserTypeFields()}

                  <Button 
                    type="submit" 
                    className="w-full bg-amogh-blue hover:bg-amogh-ocean" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Sign Up'}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <Button variant="outline" onClick={handleGoogleLogin}>
                  Google
                </Button>
                <Button variant="outline" onClick={handleGitHubLogin}>
                  GitHub
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6">
              By signing up, you agree to our{' '}
              <Link to="#" className="text-amogh-blue hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link to="#" className="text-amogh-blue hover:underline">
                Privacy Policy
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
