package com.ghaith.entities;

import java.util.List;

public class EmailRequest {
	   	private Long managerId;
	   	private Long eventId;
	    private List<String> toEmails;
	    private String subject;
	    private String body;
		public Long getManagerId() {
			return managerId;
		}
		public void setManagerId(Long managerId) {
			this.managerId = managerId;
		}
		
		public String getSubject() {
			return subject;
		}
		public void setSubject(String subject) {
			this.subject = subject;
		}
		public String getBody() {
			return body;
		}
		public void setBody(String body) {
			this.body = body;
		}
		public Long getEventId() {
			return eventId;
		}
		public void setEventId(Long eventId) {
			this.eventId = eventId;
		}
		public List<String> getToEmails() {
			return toEmails;
		}
		public void setToEmails(List<String> toEmails) {
			this.toEmails = toEmails;
		}
		
	    
}
