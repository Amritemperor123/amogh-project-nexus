
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  author: string;
  price?: string;
  image?: string;
  isFeatured?: boolean;
}

const ProjectCard = ({ id, title, description, tags, author, price, image, isFeatured }: ProjectCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${isFeatured ? 'border-amogh-blue shadow-md' : ''}`}>
      <CardHeader className="p-0">
        <div className="relative">
          <div className={`w-full h-48 bg-gradient-to-br from-amogh-blue to-amogh-light rounded-t-lg ${image ? 'bg-cover bg-center' : ''}`}>
            {isFeatured && (
              <div className="absolute top-2 left-2">
                <Badge className="bg-amogh-ocean text-white">Featured</Badge>
              </div>
            )}
            <div className="absolute top-2 right-2">
              <Button variant="ghost" size="sm" className="bg-white/20 hover:bg-white/30 text-white">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-amogh-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-gray-500">By {author}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex items-center justify-between w-full">
          {price && (
            <span className="text-lg font-bold text-amogh-ocean">${price}</span>
          )}
          <Link to={`/project/${id}`}>
            <Button className="bg-amogh-blue hover:bg-amogh-ocean text-white">
              View Details
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
