"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface Comment {
  id: number
  author: string
  content: string
  timestamp: string
}

export function DiscussionForum() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "John Doe",
      content: "This course is very informative. I'm learning a lot!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      author: "Jane Smith",
      content: "I have a question about Module 3. Can someone help?",
      timestamp: "1 hour ago",
    },
  ])
  const [newComment, setNewComment] = useState("")

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: "You",
        content: newComment.trim(),
        timestamp: "Just now",
      }
      setComments([...comments, comment])
      setNewComment("")
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Discussion Forum</h3>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-4">
            <Avatar>
              <AvatarFallback>{comment.author[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <h4 className="font-semibold">{comment.author}</h4>
                <span className="text-sm text-gray-500">{comment.timestamp}</span>
              </div>
              <p className="mt-1">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Textarea
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2"
        />
        <Button onClick={handleSubmitComment}>Post Comment</Button>
      </div>
    </div>
  )
}

