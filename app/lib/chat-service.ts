import { personalInfo } from './personal-info'

// Helper function to check if a question contains specific keywords
function containsKeywords(question: string, keywords: string[]): boolean {
  const lowerQuestion = question.toLowerCase()
  return keywords.some(keyword => lowerQuestion.includes(keyword.toLowerCase()))
}

export async function generateResponse(question: string): Promise<string> {
  const info = personalInfo
  const lowerQuestion = question.toLowerCase()

  // Education related questions
  if (containsKeywords(question, ['education', 'study', 'college', 'university', 'degree', 'qualification', 'certification'])) {
    return `Manish has built a strong foundation in his career through formal education and practical training. He successfully completed his ${info.education[0].degree} in ${info.education[0].field} from ${info.education[0].institution} in ${info.education[0].year}. This rigorous program covered both the theoretical aspects and hands-on techniques of massage therapy, preparing him for the diverse needs of his clientele. His education not only equipped him with essential technical skills but also instilled a deep understanding of holistic healing practices and wellness management.`
  }

  // Work experience related questions
  if (containsKeywords(question, ['work', 'job', 'company', 'experience', 'role', 'position', 'career'])) {
    return `Manish brings a wealth of experience to his practice. He currently serves as a ${info.experience[0].role} at ${info.experience[0].company}, where he has been instrumental since ${info.experience[0].period} in providing top-notch therapeutic services. His role involves assessing client needs, tailoring customized treatment plans, and employing a variety of massage techniques to alleviate stress and relieve muscular pain. Prior to this, he honed his skills at a prestigious wellness center where he gained valuable insights into client care, treatment personalization, and the latest in therapeutic massage methodologies. His professional journey is marked by continuous learning and a commitment to enhancing the overall well-being of every client he serves.`
  }

  // Skills related questions
  if (containsKeywords(question, ['skills', 'specialties', 'expertise', 'services', 'therapy', 'techniques', 'treatments'])) {
    return `Manish is highly proficient in a wide array of massage therapy techniques that cater to diverse client needs. Here are some detailed highlights of his expertise:

💆‍♂️ **Therapeutic Massages:**  
${info.skills.therapeutic.join(', ')}  
*Each technique is applied with precision to target specific areas of tension and promote deep relaxation.*

🧘‍♂️ **Wellness Techniques:**  
${info.skills.wellness.join(', ')}  
*These methods are designed to enhance overall wellness, correct posture, and relieve chronic pain through holistic approaches.*

🛠️ **Additional Skills:**  
${info.skills.other.join(', ')}  
*Beyond hands-on therapy, Manish is adept at client consultation, developing personalized therapy plans, and maintaining rigorous hygiene and safety standards to ensure a comfortable environment for all his clients.*

His skill set is a fusion of traditional practices and modern therapeutic methods, ensuring that every session is tailored to the unique needs of his clients.`
  }

  // Project/Initiative related questions
  if (containsKeywords(question, ['project', 'initiative', 'program', 'services', 'therapy plans', 'campaign'])) {
    const projects = info.projects.map(p => {
      return `✨ **${p.name}:** ${p.description}  
*Techniques Involved:* ${p.techniques.join(', ')}`
    }).join('\n\n')
    return `Manish has initiated several specialized wellness programs designed to promote healing and stress relief. Here are some of his key projects in detail:\n\n${projects}\n\nEach program is meticulously crafted, combining innovative techniques with personalized therapy plans to maximize therapeutic benefits and ensure long-term well-being for his clients.`
  }

  // Contact related questions
  if (containsKeywords(question, ['contact', 'email', 'reach', 'appointment', 'booking', 'connect'])) {
    return `If you’d like to book a session or have any questions about his services, Manish is just a message away. You can connect with him through the following channels:\n\n📧 **Email:** ${info.contact.email}\n🌐 **Website:** ${info.contact.website}\n📱 **Instagram:** ${info.contact.instagram}\n\nHe is always eager to assist clients on their journey to enhanced well-being and is committed to providing personalized care to each individual.`
  }

  // Location related questions
  if (containsKeywords(question, ['location', 'based', 'live', 'city', 'country'])) {
    return `Manish is proudly based in ${info.basics.location}. This vibrant locale not only influences his approach to wellness with its rich cultural heritage but also provides a dynamic setting where he can offer his massage therapy services to a diverse clientele. His local presence enables him to stay updated with community wellness trends and continuously adapt his techniques to meet the evolving needs of his clients.`
  }

  // Current role/occupation questions
  if (containsKeywords(question, ['do', 'current', 'now', 'profession', 'occupation', 'job title'])) {
    return `Currently, Manish is excelling as a ${info.basics.currentRole}. ${info.basics.bio} In his current role, he blends his extensive training with a passion for healing, employing both traditional and contemporary massage techniques. His daily work involves comprehensive client assessments, meticulous treatment sessions, and a continuous pursuit of knowledge to stay ahead in the field of wellness and massage therapy.`
  }

  // Interests/hobbies questions
  if (containsKeywords(question, ['interest', 'hobby', 'hobbies', 'passionate', 'like', 'enjoy'])) {
    return `Beyond his professional commitments, Manish is deeply passionate about various aspects of holistic well-being. His interests include ${info.interests.join(', ')}, which not only enrich his personal life but also inspire his therapeutic practices. These diverse passions drive him to continuously explore new methods of healing and to incorporate innovative ideas into his massage therapy sessions, ensuring that his clients always receive the most contemporary and effective treatments.`
  }

  // Name related questions
  if (containsKeywords(question, ['who', 'name', 'called'])) {
    return `Allow me to introduce Manish Massage Wala – a dedicated and professional massage therapist with a rich blend of technical expertise and compassionate care. Based in ${info.basics.location}, Manish is renowned for his ability to deliver personalized and effective massage therapy sessions, ensuring that every client experiences significant relief and enhanced well-being.`
  }

  // General introduction and background questions
  if (containsKeywords(question, ['tell', 'about', 'introduce', 'background', 'profile'])) {
    return `Let me provide you with a comprehensive introduction to Manish Massage Wala. He is a skilled and certified ${info.basics.currentRole} based in ${info.basics.location}. ${info.basics.bio}\n\nThroughout his career, Manish has embraced a holistic approach to healing that integrates traditional massage techniques with modern wellness practices. His formal education, combined with years of hands-on experience, has empowered him to offer a wide spectrum of services—from Swedish and Deep Tissue massage to specialized therapies like Aromatherapy and Thai Massage. Additionally, his dedication to continuous learning ensures that he stays at the forefront of innovative treatment methods.\n\nWhether you're seeking stress relief, pain management, or a rejuvenating wellness experience, Manish’s extensive background and passion for healing make him an outstanding choice for those in pursuit of improved health and vitality.`
  }

  // Fallback response for unrecognized queries
  return `I'm here to provide you with detailed insights about Manish Massage Wala. Whether you're curious about his educational background, professional journey, specialized massage techniques, or how to connect with him for an appointment, feel free to ask any specific questions. I'm dedicated to sharing every detail about his commitment to wellness and the transformative power of his massage therapy services.`
}
