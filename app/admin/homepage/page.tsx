// 'use client';

// import { useState, useEffect } from 'react';
// import AdminLayout from '../AdminLayout';
// import { Edit, Trash2, Plus, Save, X, FileText } from 'lucide-react';

// interface PageContent {
//   id: number;
//   content_type: string;
//   content_text: string;
//   order_no: number;
//   is_active: boolean;
// }

// export default function HomepageAdmin() {
//   const [contents, setContents] = useState<PageContent[]>([]);
//   const [editingId, setEditingId] = useState<number | null>(null);
//   const [editText, setEditText] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [showAddForm, setShowAddForm] = useState(false);
//   const [newContent, setNewContent] = useState({
//     content_type: 'paragraph',
//     content_text: '',
//     order_no: 1
//   });

//   useEffect(() => {
//     fetchContents();
//   }, []);

//   const fetchContents = async () => {
//     try {
//       const response = await fetch('/api/homepage');
//       if (response.ok) {
//         const data = await response.json();
//         setContents(data.sort((a: PageContent, b: PageContent) => a.order_no - b.order_no));
//       }
//     } catch (error) {
//       console.error('Error fetching contents:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleEdit = (content: PageContent) => {
//     setEditingId(content.id);
//     setEditText(content.content_text);
//   };

//   const handleSave = async (id: number) => {
//     try {
//       const response = await fetch(`/api/homepage/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ content_text: editText }),
//       });

//       if (response.ok) {
//         await fetchContents();
//         setEditingId(null);
//         setEditText('');
//       }
//     } catch (error) {
//       console.error('Error updating content:', error);
//     }
//   };

//   const handleDelete = async (id: number) => {
//     if (confirm('Are you sure you want to delete this content?')) {
//       try {
//         const response = await fetch(`/api/homepage/${id}`, {
//           method: 'DELETE',
//         });

//         if (response.ok) {
//           await fetchContents();
//         }
//       } catch (error) {
//         console.error('Error deleting content:', error);
//       }
//     }
//   };

//   const handleCancel = () => {
//     setEditingId(null);
//     setEditText('');
//   };

//   const handleAddContent = async () => {
//     try {
//       const response = await fetch('/api/homepage', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newContent),
//       });

//       if (response.ok) {
//         await fetchContents();
//         setShowAddForm(false);
//         setNewContent({
//           content_type: 'paragraph',
//           content_text: '',
//           order_no: contents.length + 1
//         });
//       }
//     } catch (error) {
//       console.error('Error adding content:', error);
//     }
//   };

//   const getContentTypeLabel = (type: string) => {
//     const types: { [key: string]: string } = {
//       heading: 'Heading',
//       paragraph: 'Paragraph',
//       button: 'Button',
//       image: 'Image'
//     };
//     return types[type] || type;
//   };

//   const getContentTypeColor = (type: string) => {
//     const colors: { [key: string]: string } = {
//       heading: 'bg-blue-100 text-blue-800',
//       paragraph: 'bg-gray-100 text-gray-800',
//       button: 'bg-green-100 text-green-800',
//       image: 'bg-purple-100 text-purple-800'
//     };
//     return colors[type] || 'bg-gray-100 text-gray-800';
//   };

//   if (loading) {
//     return (
//       <AdminLayout activeSection="homepage">
//         <div className="flex items-center justify-center h-64">
//           <div className="text-lg text-gray-600">Loading content...</div>
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout activeSection="homepage">
//       <div className="space-y-6 font-sans">
//         {/* Header */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">Homepage Content</h3>
//             <p className="text-gray-600 mt-1">Manage your homepage content blocks</p>
//           </div>
//           <button
//             onClick={() => setShowAddForm(true)}
//             className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             <Plus size={16} />
//             <span>Add Content</span>
//           </button>
//         </div>

//         {/* Add Content Form */}
//         {showAddForm && (
//           <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
//             <h4 className="text-lg font-semibold text-gray-900 mb-4">Add New Content</h4>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Content Type
//                 </label>
//                 <select
//                   value={newContent.content_type}
//                   onChange={(e) => setNewContent({ ...newContent, content_type: e.target.value })}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                 >
//                   <option value="paragraph">Paragraph</option>
//                   <option value="heading">Heading</option>
//                   <option value="button">Button</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Content Text
//                 </label>
//                 <textarea
//                   value={newContent.content_text}
//                   onChange={(e) => setNewContent({ ...newContent, content_text: e.target.value })}
//                   rows={3}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   placeholder="Enter your content text..."
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Order
//                 </label>
//                 <input
//                   type="number"
//                   value={newContent.order_no}
//                   onChange={(e) => setNewContent({ ...newContent, order_no: parseInt(e.target.value) })}
//                   className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                   min="1"
//                 />
//               </div>
//               <div className="flex space-x-3">
//                 <button
//                   onClick={handleAddContent}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Add Content
//                 </button>
//                 <button
//                   onClick={() => setShowAddForm(false)}
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Content List */}
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200">
//           <div className="p-6 border-b border-gray-200">
//             <h4 className="text-lg font-semibold text-gray-900">
//               Content Blocks ({contents.length})
//             </h4>
//           </div>
          
//           <div className="divide-y divide-gray-200">
//             {contents.map((content) => (
//               <div key={content.id} className="p-6">
//                 <div className="flex items-start justify-between">
//                   <div className="flex-1">
//                     <div className="flex items-center space-x-3 mb-3">
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${getContentTypeColor(content.content_type)}`}>
//                         {getContentTypeLabel(content.content_type)}
//                       </span>
//                       <span className="text-sm text-gray-500">Order: {content.order_no}</span>
//                       <span className={`px-2 py-1 text-xs font-medium rounded-full ${
//                         content.is_active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                       }`}>
//                         {content.is_active ? 'Active' : 'Inactive'}
//                       </span>
//                     </div>
                    
//                     {editingId === content.id ? (
//                       <div className="space-y-3">
//                         <textarea
//                           value={editText}
//                           onChange={(e) => setEditText(e.target.value)}
//                           rows={3}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//                         />
//                         <div className="flex space-x-2">
//                           <button
//                             onClick={() => handleSave(content.id)}
//                             className="flex items-center space-x-1 bg-green-600 text-white px-3 py-1.5 rounded-lg hover:bg-green-700 transition-colors text-sm"
//                           >
//                             <Save size={14} />
//                             <span>Save</span>
//                           </button>
//                           <button
//                             onClick={handleCancel}
//                             className="flex items-center space-x-1 bg-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-400 transition-colors text-sm"
//                           >
//                             <X size={14} />
//                             <span>Cancel</span>
//                           </button>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="text-gray-900">
//                         {content.content_type === 'heading' ? (
//                           <h3 className="text-lg font-semibold">{content.content_text}</h3>
//                         ) : (
//                           <p className="leading-relaxed">{content.content_text}</p>
//                         )}
//                       </div>
//                     )}
//                   </div>
                  
//                   {editingId !== content.id && (
//                     <div className="flex space-x-2 ml-4">
//                       <button
//                         onClick={() => handleEdit(content)}
//                         className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//                         title="Edit content"
//                       >
//                         <Edit size={16} />
//                       </button>
//                       <button
//                         onClick={() => handleDelete(content.id)}
//                         className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
//                         title="Delete content"
//                       >
//                         <Trash2 size={16} />
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             ))}
            
//             {contents.length === 0 && (
//               <div className="p-12 text-center">
//                 <div className="text-gray-500">
//                   <FileText size={48} className="mx-auto mb-4 opacity-50" />
//                   <p className="text-lg font-medium">No content blocks found</p>
//                   <p className="text-sm mt-1">Click &quot;Add Content&quot; to create your first content block</p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </AdminLayout>
//   );
// }
